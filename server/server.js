const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || './database/training.db';

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the parent directory (the frontend)
app.use(express.static(path.join(__dirname, '..')));

// Database initialization
const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        process.exit(1);
    }
    console.log('Connected to the SQLite database.');
    initializeDatabase();
});

// Initialize database tables
function initializeDatabase() {
    const tables = [
        `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_login DATETIME,
            preferences TEXT DEFAULT '{}'
        )`,
        `CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            task_id TEXT NOT NULL,
            completed BOOLEAN DEFAULT 0,
            completed_at DATETIME,
            time_spent INTEGER DEFAULT 0,
            notes TEXT,
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE(user_id, task_id)
        )`,
        `CREATE TABLE IF NOT EXISTS achievements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            achievement_id TEXT NOT NULL,
            unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE(user_id, achievement_id)
        )`,
        `CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            start_time DATETIME DEFAULT CURRENT_TIMESTAMP,
            end_time DATETIME,
            activities TEXT DEFAULT '[]',
            FOREIGN KEY (user_id) REFERENCES users (id)
        )`,
        `CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            content TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )`
    ];

    tables.forEach(table => {
        db.run(table, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            }
        });
    });

    // Create default user if none exists
    db.get("SELECT COUNT(*) as count FROM users", (err, row) => {
        if (!err && row.count === 0) {
            db.run("INSERT INTO users (username, email) VALUES (?, ?)", 
                ['default_user', 'user@example.com'], (err) => {
                if (err) {
                    console.error('Error creating default user:', err.message);
                } else {
                    console.log('Created default user');
                }
            });
        }
    });
}

// === API Routes ===

// Get all progress for a user
app.get('/api/progress', (req, res) => {
    const userId = req.query.user_id || 1;
    
    db.all(
        "SELECT * FROM progress WHERE user_id = ? ORDER BY completed_at DESC",
        [userId],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            
            // Transform to match frontend format
            const completedTasks = rows
                .filter(row => row.completed)
                .map(row => row.task_id);
            
            const totalHours = rows.reduce((sum, row) => sum + (row.time_spent || 0), 0);
            
            // Calculate streak
            const recentActivity = rows
                .filter(row => row.completed)
                .sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at));
            
            let streak = 0;
            if (recentActivity.length > 0) {
                const today = new Date();
                let currentDate = new Date(recentActivity[0].completed_at);
                
                for (let activity of recentActivity) {
                    const activityDate = new Date(activity.completed_at);
                    const daysDiff = Math.floor((today - activityDate) / (1000 * 60 * 60 * 24));
                    
                    if (daysDiff <= streak + 1) {
                        streak++;
                    } else {
                        break;
                    }
                }
            }
            
            res.json({
                completedTasks,
                totalHours: Math.round(totalHours / 60), // Convert minutes to hours
                streak,
                lastActivity: recentActivity.length > 0 ? recentActivity[0].completed_at : null,
                detailed: rows
            });
        }
    );
});

// Update task progress
app.post('/api/progress/:taskId', (req, res) => {
    const { taskId } = req.params;
    const { completed, timeSpent, notes } = req.body;
    const userId = req.body.user_id || 1;
    
    const query = `
        INSERT OR REPLACE INTO progress 
        (user_id, task_id, completed, completed_at, time_spent, notes)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    const completedAt = completed ? new Date().toISOString() : null;
    
    db.run(query, [userId, taskId, completed ? 1 : 0, completedAt, timeSpent || 0, notes || ''], 
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            
            res.json({ 
                success: true, 
                taskId,
                completed,
                id: this.lastID 
            });
        });
});

// Get achievements
app.get('/api/achievements', (req, res) => {
    const userId = req.query.user_id || 1;
    
    db.all(
        "SELECT * FROM achievements WHERE user_id = ?",
        [userId],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(rows);
        }
    );
});

// Unlock achievement
app.post('/api/achievements/:achievementId', (req, res) => {
    const { achievementId } = req.params;
    const userId = req.body.user_id || 1;
    
    db.run(
        "INSERT OR IGNORE INTO achievements (user_id, achievement_id) VALUES (?, ?)",
        [userId, achievementId],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ success: true, id: this.lastID });
        }
    );
});

// Get/Update notes
app.get('/api/notes', (req, res) => {
    const userId = req.query.user_id || 1;
    
    db.get(
        "SELECT content FROM notes WHERE user_id = ? ORDER BY updated_at DESC LIMIT 1",
        [userId],
        (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ content: row ? row.content : '' });
        }
    );
});

app.post('/api/notes', (req, res) => {
    const { content } = req.body;
    const userId = req.body.user_id || 1;
    
    db.run(
        `INSERT OR REPLACE INTO notes (user_id, content, updated_at) 
         VALUES (?, ?, CURRENT_TIMESTAMP)`,
        [userId, content],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ success: true });
        }
    );
});

// Analytics endpoint
app.get('/api/analytics', (req, res) => {
    const userId = req.query.user_id || 1;
    
    const analytics = {};
    
    // Get completion statistics by task type
    db.all(`
        SELECT 
            COUNT(*) as total_completed,
            AVG(time_spent) as avg_time,
            DATE(completed_at) as completion_date
        FROM progress 
        WHERE user_id = ? AND completed = 1 
        GROUP BY DATE(completed_at)
        ORDER BY completion_date DESC
        LIMIT 30
    `, [userId], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        analytics.dailyProgress = rows;
        res.json(analytics);
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        database: 'connected'
    });
});

// Serve the main application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down gracefully...');
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Database connection closed.');
        process.exit(0);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Database: ${DB_PATH}`);
    console.log(`🌐 Frontend: http://localhost:${PORT}`);
});

module.exports = app;
