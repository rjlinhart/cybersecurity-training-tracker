// Database API Service for the Cybersecurity Training Tracker
class DatabaseService {
    constructor() {
        this.baseURL = window.location.origin;
        this.apiURL = `${this.baseURL}/api`;
        this.isOnline = false;
        this.userId = 1; // Default user ID
        this.checkConnectionStatus();
    }

    async checkConnectionStatus() {
        try {
            const response = await fetch(`${this.apiURL}/health`);
            this.isOnline = response.ok;
            console.log(`🌐 Database connection: ${this.isOnline ? 'ONLINE' : 'OFFLINE'}`);
        } catch (error) {
            this.isOnline = false;
            console.log('📱 Running in offline mode');
        }
        return this.isOnline;
    }

    // Progress API methods
    async getProgress() {
        if (!this.isOnline) {
            return this.getLocalProgress();
        }

        try {
            const response = await fetch(`${this.apiURL}/progress?user_id=${this.userId}`);
            if (!response.ok) throw new Error('Failed to fetch progress');
            
            const data = await response.json();
            // Store locally as backup
            localStorage.setItem('cyberSecProgress', JSON.stringify({
                completedTasks: data.completedTasks,
                totalHours: data.totalHours,
                streak: data.streak,
                lastActivity: data.lastActivity
            }));
            
            return data;
        } catch (error) {
            console.warn('Failed to fetch from database, using local storage:', error);
            return this.getLocalProgress();
        }
    }

    async saveTaskProgress(taskId, completed, timeSpent = 0, notes = '') {
        const progressData = {
            user_id: this.userId,
            completed,
            timeSpent,
            notes
        };

        // Always save locally first
        this.saveLocalTaskProgress(taskId, completed, timeSpent);

        if (!this.isOnline) {
            return { success: true, source: 'local' };
        }

        try {
            const response = await fetch(`${this.apiURL}/progress/${taskId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(progressData)
            });

            if (!response.ok) throw new Error('Failed to save progress');
            
            const result = await response.json();
            return { ...result, source: 'database' };
        } catch (error) {
            console.warn('Failed to save to database, saved locally:', error);
            return { success: true, source: 'local', error: error.message };
        }
    }

    // Achievement API methods
    async getAchievements() {
        if (!this.isOnline) {
            return this.getLocalAchievements();
        }

        try {
            const response = await fetch(`${this.apiURL}/achievements?user_id=${this.userId}`);
            if (!response.ok) throw new Error('Failed to fetch achievements');
            
            return await response.json();
        } catch (error) {
            console.warn('Failed to fetch achievements from database:', error);
            return this.getLocalAchievements();
        }
    }

    async unlockAchievement(achievementId) {
        // Always save locally first
        this.saveLocalAchievement(achievementId);

        if (!this.isOnline) {
            return { success: true, source: 'local' };
        }

        try {
            const response = await fetch(`${this.apiURL}/achievements/${achievementId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: this.userId })
            });

            if (!response.ok) throw new Error('Failed to unlock achievement');
            
            const result = await response.json();
            return { ...result, source: 'database' };
        } catch (error) {
            console.warn('Failed to save achievement to database:', error);
            return { success: true, source: 'local', error: error.message };
        }
    }

    // Notes API methods
    async getNotes() {
        if (!this.isOnline) {
            return { content: localStorage.getItem('quickNotes') || '' };
        }

        try {
            const response = await fetch(`${this.apiURL}/notes?user_id=${this.userId}`);
            if (!response.ok) throw new Error('Failed to fetch notes');
            
            const data = await response.json();
            // Store locally as backup
            localStorage.setItem('quickNotes', data.content);
            return data;
        } catch (error) {
            console.warn('Failed to fetch notes from database:', error);
            return { content: localStorage.getItem('quickNotes') || '' };
        }
    }

    async saveNotes(content) {
        // Always save locally first
        localStorage.setItem('quickNotes', content);

        if (!this.isOnline) {
            return { success: true, source: 'local' };
        }

        try {
            const response = await fetch(`${this.apiURL}/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    user_id: this.userId,
                    content 
                })
            });

            if (!response.ok) throw new Error('Failed to save notes');
            
            const result = await response.json();
            return { ...result, source: 'database' };
        } catch (error) {
            console.warn('Failed to save notes to database:', error);
            return { success: true, source: 'local', error: error.message };
        }
    }

    // Analytics API methods
    async getAnalytics() {
        if (!this.isOnline) {
            return { dailyProgress: [], source: 'local' };
        }

        try {
            const response = await fetch(`${this.apiURL}/analytics?user_id=${this.userId}`);
            if (!response.ok) throw new Error('Failed to fetch analytics');
            
            return await response.json();
        } catch (error) {
            console.warn('Failed to fetch analytics:', error);
            return { dailyProgress: [], source: 'local' };
        }
    }

    // Sync methods
    async syncData() {
        if (!this.isOnline) {
            console.log('Cannot sync - offline mode');
            return { success: false, reason: 'offline' };
        }

        try {
            // Get local data
            const localProgress = this.getLocalProgress();
            const localNotes = localStorage.getItem('quickNotes') || '';
            
            // Sync progress
            for (const taskId of localProgress.completedTasks) {
                await this.saveTaskProgress(taskId, true, 0);
            }

            // Sync notes
            if (localNotes) {
                await this.saveNotes(localNotes);
            }

            console.log('✅ Data sync completed');
            return { success: true };
        } catch (error) {
            console.error('❌ Data sync failed:', error);
            return { success: false, error: error.message };
        }
    }

    // Local storage fallback methods
    getLocalProgress() {
        const saved = localStorage.getItem('cyberSecProgress');
        return saved ? JSON.parse(saved) : {
            completedTasks: [],
            totalHours: 0,
            streak: 0,
            lastActivity: null
        };
    }

    saveLocalTaskProgress(taskId, completed, timeSpent = 0) {
        const progress = this.getLocalProgress();
        
        if (completed) {
            if (!progress.completedTasks.includes(taskId)) {
                progress.completedTasks.push(taskId);
                progress.lastActivity = new Date().toISOString();
                progress.totalHours += Math.round(timeSpent / 60) || 1; // Convert minutes to hours
            }
        } else {
            const index = progress.completedTasks.indexOf(taskId);
            if (index > -1) {
                progress.completedTasks.splice(index, 1);
                progress.totalHours = Math.max(0, progress.totalHours - 1);
            }
        }
        
        localStorage.setItem('cyberSecProgress', JSON.stringify(progress));
    }

    getLocalAchievements() {
        const saved = localStorage.getItem('cyberSecAchievements');
        return saved ? JSON.parse(saved) : [];
    }

    saveLocalAchievement(achievementId) {
        const achievements = this.getLocalAchievements();
        if (!achievements.find(a => a.achievement_id === achievementId)) {
            achievements.push({
                achievement_id: achievementId,
                unlocked_at: new Date().toISOString()
            });
            localStorage.setItem('cyberSecAchievements', JSON.stringify(achievements));
        }
    }

    // Connection status methods
    onlineStatusChanged(callback) {
        window.addEventListener('online', () => {
            this.checkConnectionStatus().then(() => {
                callback(true);
                this.syncData(); // Auto-sync when coming back online
            });
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            callback(false);
        });
    }

    // Status display
    getConnectionStatus() {
        return {
            online: this.isOnline,
            message: this.isOnline ? '🌐 Connected to database' : '📱 Offline mode - data saved locally'
        };
    }
}

// Export for use in the main app
window.DatabaseService = DatabaseService;
