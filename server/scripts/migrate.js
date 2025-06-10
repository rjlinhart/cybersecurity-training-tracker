const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Create database directory if it doesn't exist
const dbDir = path.join(__dirname, '..', 'database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
    console.log('Created database directory');
}

const dbPath = path.join(dbDir, 'training.db');
const db = new sqlite3.Database(dbPath);

console.log('🗄️  Running database migrations...');

// Migration scripts
const migrations = [
    {
        name: 'Create users table',
        sql: `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE,
            password_hash TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_login DATETIME,
            preferences TEXT DEFAULT '{}',
            is_active BOOLEAN DEFAULT 1
        )`
    },
    {
        name: 'Create progress table',
        sql: `CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            task_id TEXT NOT NULL,
            completed BOOLEAN DEFAULT 0,
            completed_at DATETIME,
            time_spent INTEGER DEFAULT 0,
            notes TEXT,
            phase_index INTEGER,
            week_index INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE(user_id, task_id)
        )`
    },
    {
        name: 'Create achievements table',
        sql: `CREATE TABLE IF NOT EXISTS achievements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            achievement_id TEXT NOT NULL,
            unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            progress_data TEXT DEFAULT '{}',
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE(user_id, achievement_id)
        )`
    },
    {
        name: 'Create sessions table',
        sql: `CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            start_time DATETIME DEFAULT CURRENT_TIMESTAMP,
            end_time DATETIME,
            activities TEXT DEFAULT '[]',
            total_time INTEGER DEFAULT 0,
            tasks_completed INTEGER DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )`
    },
    {
        name: 'Create notes table',
        sql: `CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            content TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )`
    },
    {
        name: 'Create analytics table',
        sql: `CREATE TABLE IF NOT EXISTS analytics (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER DEFAULT 1,
            date DATE NOT NULL,
            tasks_completed INTEGER DEFAULT 0,
            time_spent INTEGER DEFAULT 0,
            achievements_unlocked INTEGER DEFAULT 0,
            streak_count INTEGER DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE(user_id, date)
        )`
    },
    {
        name: 'Create indexes',
        sql: `
            CREATE INDEX IF NOT EXISTS idx_progress_user_task ON progress(user_id, task_id);
            CREATE INDEX IF NOT EXISTS idx_progress_completed ON progress(completed, completed_at);
            CREATE INDEX IF NOT EXISTS idx_achievements_user ON achievements(user_id, achievement_id);
            CREATE INDEX IF NOT EXISTS idx_sessions_user_time ON sessions(user_id, start_time);
            CREATE INDEX IF NOT EXISTS idx_analytics_user_date ON analytics(user_id, date);
        `
    }
];

// Run migrations sequentially
async function runMigrations() {
    for (const migration of migrations) {
        try {
            await new Promise((resolve, reject) => {
                db.exec(migration.sql, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log(`✅ ${migration.name}`);
                        resolve();
                    }
                });
            });
        } catch (error) {
            console.error(`❌ Failed to run migration "${migration.name}":`, error.message);
            process.exit(1);
        }
    }

    // Create default user if none exists
    db.get("SELECT COUNT(*) as count FROM users", (err, row) => {
        if (!err && row.count === 0) {
            db.run(
                "INSERT INTO users (username, email) VALUES (?, ?)", 
                ['student', 'student@cybersec.training'],
                (err) => {
                    if (err) {
                        console.error('Error creating default user:', err.message);
                    } else {
                        console.log('✅ Created default user: student');
                    }
                    
                    db.close((err) => {
                        if (err) {
                            console.error('Error closing database:', err.message);
                        } else {
                            console.log('🎉 Database migration completed successfully!');
                        }
                    });
                }
            );
        } else {
            db.close((err) => {
                if (err) {
                    console.error('Error closing database:', err.message);
                } else {
                    console.log('🎉 Database migration completed successfully!');
                }
            });
        }
    });
}

runMigrations();
