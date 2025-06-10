class CyberSecTracker {
    constructor() {
        this.curriculum = this.initializeCurriculum();
        this.progress = this.loadProgress();
        this.achievements = this.initializeAchievements();
        this.init();
    }

    initializeCurriculum() {
        return [
            {
                title: "Phase 1: Foundations",
                weeks: [
                    {
                        title: "Week 1-2: Basic Programming & Command Line",
                        tasks: [
                            {
                                id: "p1w1t1",
                                title: "Python Variables and Data Types",
                                description: "Complete Python basics tutorial and practice exercises",
                                type: "coding",
                                estimatedHours: 4
                            },
                            {
                                id: "p1w1t2",
                                title: "Linux Command Line Basics",
                                description: "Master file system navigation and basic commands",
                                type: "lab",
                                estimatedHours: 3
                            },
                            {
                                id: "p1w1t3",
                                title: "Python Functions and Loops",
                                description: "Build 5 small Python programs using functions and loops",
                                type: "coding",
                                estimatedHours: 5
                            },
                            {
                                id: "p1w1t4",
                                title: "File Permissions Lab",
                                description: "Practice Linux file permissions and user management",
                                type: "lab",
                                estimatedHours: 2
                            }
                        ]
                    },
                    {
                        title: "Week 3-4: Networking Basics",
                        tasks: [
                            {
                                id: "p1w2t1",
                                title: "TCP/IP Protocol Study",
                                description: "Learn networking fundamentals and protocol stack",
                                type: "theory",
                                estimatedHours: 3
                            },
                            {
                                id: "p1w2t2",
                                title: "Wireshark Packet Analysis Lab",
                                description: "Capture and analyze network traffic with Wireshark",
                                type: "lab",
                                estimatedHours: 4
                            },
                            {
                                id: "p1w2t3",
                                title: "Nmap Network Scanning",
                                description: "Learn network discovery and port scanning techniques",
                                type: "lab",
                                estimatedHours: 3
                            },
                            {
                                id: "p1w2t4",
                                title: "Network Python Scripts",
                                description: "Write Python scripts for network operations",
                                type: "coding",
                                estimatedHours: 4
                            }
                        ]
                    }
                ]
            },
            {
                title: "Phase 2: Security Fundamentals",
                weeks: [
                    {
                        title: "Week 5-6: Web Security",
                        tasks: [
                            {
                                id: "p2w1t1",
                                title: "HTML/CSS/JavaScript Basics",
                                description: "Learn web technologies fundamentals",
                                type: "coding",
                                estimatedHours: 6
                            },
                            {
                                id: "p2w1t2",
                                title: "OWASP Top 10 Study",
                                description: "Research and document common web vulnerabilities",
                                type: "theory",
                                estimatedHours: 4
                            },
                            {
                                id: "p2w1t3",
                                title: "Burp Suite Introduction",
                                description: "Set up and learn basic Burp Suite functionality",
                                type: "lab",
                                estimatedHours: 3
                            },
                            {
                                id: "p2w1t4",
                                title: "Web Vulnerability Scanner",
                                description: "Build a basic web vulnerability scanner in Python",
                                type: "coding",
                                estimatedHours: 5
                            }
                        ]
                    },
                    {
                        title: "Week 7-8: System Security",
                        tasks: [
                            {
                                id: "p2w2t1",
                                title: "Kali Linux Setup",
                                description: "Install and configure Kali Linux virtual machine",
                                type: "lab",
                                estimatedHours: 2
                            },
                            {
                                id: "p2w2t2",
                                title: "Cryptography Fundamentals",
                                description: "Learn encryption, hashing, and digital signatures",
                                type: "theory",
                                estimatedHours: 4
                            },
                            {
                                id: "p2w2t3",
                                title: "Python Cryptography Lab",
                                description: "Implement basic encryption/decryption in Python",
                                type: "coding",
                                estimatedHours: 4
                            },
                            {
                                id: "p2w2t4",
                                title: "System Hardening Lab",
                                description: "Practice Windows and Linux security hardening",
                                type: "lab",
                                estimatedHours: 3
                            }
                        ]
                    }
                ]
            },
            {
                title: "Phase 3: Penetration Testing",
                weeks: [
                    {
                        title: "Week 9-12: Web Application Testing",
                        tasks: [
                            {
                                id: "p3w1t1",
                                title: "SQL Injection Labs",
                                description: "Practice SQL injection on DVWA and WebGoat",
                                type: "lab",
                                estimatedHours: 6
                            },
                            {
                                id: "p3w1t2",
                                title: "XSS Attack Labs",
                                description: "Learn and practice Cross-Site Scripting attacks",
                                type: "lab",
                                estimatedHours: 5
                            },
                            {
                                id: "p3w1t3",
                                title: "Automated SQLi Tool",
                                description: "Build an automated SQL injection detection tool",
                                type: "coding",
                                estimatedHours: 8
                            },
                            {
                                id: "p3w1t4",
                                title: "Web App Pentest Report",
                                description: "Complete full web application penetration test",
                                type: "project",
                                estimatedHours: 10
                            }
                        ]
                    },
                    {
                        title: "Week 13-16: Network Penetration Testing",
                        tasks: [
                            {
                                id: "p3w2t1",
                                title: "Metasploit Framework",
                                description: "Learn Metasploit for exploitation and post-exploitation",
                                type: "lab",
                                estimatedHours: 8
                            },
                            {
                                id: "p3w2t2",
                                title: "Buffer Overflow Basics",
                                description: "Understand and practice basic buffer overflow attacks",
                                type: "lab",
                                estimatedHours: 6
                            },
                            {
                                id: "p3w2t3",
                                title: "Privilege Escalation",
                                description: "Practice Windows and Linux privilege escalation",
                                type: "lab",
                                estimatedHours: 5
                            },
                            {
                                id: "p3w2t4",
                                title: "Custom Exploit Development",
                                description: "Develop a custom exploit for a known vulnerability",
                                type: "coding",
                                estimatedHours: 12
                            }
                        ]
                    }
                ]
            },
            {
                title: "Phase 4: Advanced Topics",
                weeks: [
                    {
                        title: "Week 17-20: Specialized Areas",
                        tasks: [
                            {
                                id: "p4w1t1",
                                title: "Digital Forensics Lab",
                                description: "Learn basic digital forensics and evidence collection",
                                type: "lab",
                                estimatedHours: 6
                            },
                            {
                                id: "p4w1t2",
                                title: "Malware Analysis Basics",
                                description: "Static and dynamic malware analysis techniques",
                                type: "lab",
                                estimatedHours: 8
                            },
                            {
                                id: "p4w1t3",
                                title: "Social Engineering Awareness",
                                description: "Study social engineering techniques and defenses",
                                type: "theory",
                                estimatedHours: 3
                            },
                            {
                                id: "p4w1t4",
                                title: "Incident Response Plan",
                                description: "Create a comprehensive incident response plan",
                                type: "project",
                                estimatedHours: 5
                            }
                        ]
                    },
                    {
                        title: "Week 21-24: Capstone Projects",
                        tasks: [
                            {
                                id: "p4w2t1",
                                title: "CTF Competition Participation",
                                description: "Participate in online Capture The Flag competitions",
                                type: "competition",
                                estimatedHours: 15
                            },
                            {
                                id: "p4w2t2",
                                title: "Complete Penetration Test",
                                description: "Perform full penetration test with professional report",
                                type: "project",
                                estimatedHours: 20
                            },
                            {
                                id: "p4w2t3",
                                title: "Security Tool Development",
                                description: "Build a complete security tool or framework",
                                type: "coding",
                                estimatedHours: 25
                            },
                            {
                                id: "p4w2t4",
                                title: "Portfolio Presentation",
                                description: "Create and present cybersecurity portfolio",
                                type: "project",
                                estimatedHours: 8
                            }
                        ]
                    }
                ]
            }
        ];
    }

    initializeAchievements() {
        return [
            { id: 'first_task', title: 'First Steps', description: 'Complete your first task', icon: '🎯', unlocked: false },
            { id: 'week_complete', title: 'Week Warrior', description: 'Complete a full week', icon: '📅', unlocked: false },
            { id: 'coding_master', title: 'Code Ninja', description: 'Complete 10 coding tasks', icon: '💻', unlocked: false },
            { id: 'lab_expert', title: 'Lab Expert', description: 'Complete 15 lab exercises', icon: '🔬', unlocked: false },
            { id: 'phase_complete', title: 'Phase Champion', description: 'Complete an entire phase', icon: '🏆', unlocked: false },
            { id: 'streak_7', title: 'Consistent Learner', description: '7-day learning streak', icon: '🔥', unlocked: false },
            { id: 'all_complete', title: 'Cybersec Master', description: 'Complete entire curriculum', icon: '👑', unlocked: false }
        ];
    }

    init() {
        this.renderCurriculum();
        this.updateStats();
        this.updateAchievements();
        this.setupEventListeners();
        this.loadNotes();
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const phaseIndex = e.target.dataset.phase;
                this.switchPhase(phaseIndex);
            });
        });

        // Task completion
        document.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' && e.target.classList.contains('task-checkbox')) {
                this.toggleTask(e.target.dataset.taskId, e.target.checked);
            }
        });

        // Auto-save notes
        document.getElementById('quick-notes').addEventListener('input', () => {
            this.saveNotes();
        });
    }

    switchPhase(phaseIndex) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`[data-phase="${phaseIndex}"]`).classList.add('active');

        // Show/hide phase content
        document.querySelectorAll('.phase-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`phase-${phaseIndex}`).style.display = 'block';
    }

    renderCurriculum() {
        this.curriculum.forEach((phase, phaseIndex) => {
            const phaseElement = document.getElementById(`phase-${phaseIndex}`);
            let phaseHTML = `<h2>${phase.title}</h2>`;

            phase.weeks.forEach((week, weekIndex) => {
                const weekProgress = this.calculateWeekProgress(phaseIndex, weekIndex);
                phaseHTML += `
                    <div class="week-section">
                        <div class="week-header">
                            <h3 class="week-title">${week.title}</h3>
                            <span class="week-progress">${weekProgress.completed}/${weekProgress.total} tasks (${weekProgress.percentage}%)</span>
                        </div>
                        <ul class="task-list">
                `;

                week.tasks.forEach(task => {
                    const isCompleted = this.progress.completedTasks.includes(task.id);
                    const taskClass = isCompleted ? 'task-item completed' : 'task-item';
                    const typeIcon = this.getTaskIcon(task.type);
                    
                    phaseHTML += `
                        <li class="${taskClass}">
                            <input type="checkbox" class="task-checkbox" data-task-id="${task.id}" ${isCompleted ? 'checked' : ''}>
                            <div class="task-content">
                                <div class="task-title">${typeIcon} ${task.title}</div>
                                <div class="task-description">${task.description}</div>
                                <div class="task-meta">
                                    <span>Type: ${task.type}</span>
                                    <span>Estimated: ${task.estimatedHours}h</span>
                                </div>
                            </div>
                        </li>
                    `;
                });

                phaseHTML += `
                        </ul>
                    </div>
                `;
            });

            phaseElement.innerHTML = phaseHTML;
        });
    }

    getTaskIcon(type) {
        const icons = {
            'coding': '💻',
            'lab': '🔬',
            'theory': '📚',
            'project': '🚀',
            'competition': '🏁'
        };
        return icons[type] || '📝';
    }

    calculateWeekProgress(phaseIndex, weekIndex) {
        const week = this.curriculum[phaseIndex].weeks[weekIndex];
        const completed = week.tasks.filter(task => 
            this.progress.completedTasks.includes(task.id)
        ).length;
        const total = week.tasks.length;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        return { completed, total, percentage };
    }

    toggleTask(taskId, isCompleted) {
        if (isCompleted) {
            if (!this.progress.completedTasks.includes(taskId)) {
                this.progress.completedTasks.push(taskId);
                this.progress.lastActivity = new Date().toISOString();
                
                // Add estimated hours to total time
                const task = this.findTaskById(taskId);
                if (task) {
                    this.progress.totalHours += task.estimatedHours;
                }
            }
        } else {
            const index = this.progress.completedTasks.indexOf(taskId);
            if (index > -1) {
                this.progress.completedTasks.splice(index, 1);
                
                // Subtract estimated hours from total time
                const task = this.findTaskById(taskId);
                if (task) {
                    this.progress.totalHours = Math.max(0, this.progress.totalHours - task.estimatedHours);
                }
            }
        }
        
        this.saveProgress();
        this.updateStats();
        this.updateAchievements();
        this.renderCurriculum();
    }

    findTaskById(taskId) {
        for (const phase of this.curriculum) {
            for (const week of phase.weeks) {
                const task = week.tasks.find(t => t.id === taskId);
                if (task) return task;
            }
        }
        return null;
    }

    updateStats() {
        const totalTasks = this.curriculum.reduce((acc, phase) => 
            acc + phase.weeks.reduce((weekAcc, week) => weekAcc + week.tasks.length, 0), 0
        );
        
        const completedTasks = this.progress.completedTasks.length;
        const overallPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        document.getElementById('completed-tasks').textContent = completedTasks;
        document.getElementById('total-tasks').textContent = totalTasks;
        document.getElementById('overall-percentage').textContent = `${overallPercentage}%`;
        document.getElementById('overall-progress-fill').style.width = `${overallPercentage}%`;
        document.getElementById('current-streak').textContent = `${this.calculateStreak()} days`;
        document.getElementById('time-invested').textContent = `${this.progress.totalHours} hours`;
    }

    calculateStreak() {
        // Simple streak calculation based on last activity
        if (!this.progress.lastActivity) return 0;
        
        const lastActivity = new Date(this.progress.lastActivity);
        const today = new Date();
        const diffTime = Math.abs(today - lastActivity);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays <= 1 ? this.progress.streak || 1 : 0;
    }

    updateAchievements() {
        const completedTasks = this.progress.completedTasks.length;
        const codingTasks = this.progress.completedTasks.filter(taskId => {
            const task = this.findTaskById(taskId);
            return task && task.type === 'coding';
        }).length;
        
        const labTasks = this.progress.completedTasks.filter(taskId => {
            const task = this.findTaskById(taskId);
            return task && task.type === 'lab';
        }).length;

        // Check achievements
        if (completedTasks >= 1) this.achievements.find(a => a.id === 'first_task').unlocked = true;
        if (codingTasks >= 10) this.achievements.find(a => a.id === 'coding_master').unlocked = true;
        if (labTasks >= 15) this.achievements.find(a => a.id === 'lab_expert').unlocked = true;
        if (this.calculateStreak() >= 7) this.achievements.find(a => a.id === 'streak_7').unlocked = true;

        // Render achievements
        const achievementList = document.getElementById('achievement-list');
        achievementList.innerHTML = this.achievements.map(achievement => `
            <div class="achievement ${achievement.unlocked ? 'unlocked' : ''}">
                <span class="achievement-icon">${achievement.icon}</span>
                <div class="achievement-text">
                    <strong>${achievement.title}</strong><br>
                    <small>${achievement.description}</small>
                </div>
            </div>
        `).join('');
    }

    saveProgress() {
        localStorage.setItem('cyberSecProgress', JSON.stringify(this.progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('cyberSecProgress');
        return saved ? JSON.parse(saved) : {
            completedTasks: [],
            totalHours: 0,
            streak: 0,
            lastActivity: null
        };
    }

    saveNotes() {
        const notes = document.getElementById('quick-notes').value;
        localStorage.setItem('quickNotes', notes);
    }

    loadNotes() {
        const saved = localStorage.getItem('quickNotes');
        if (saved) {
            document.getElementById('quick-notes').value = saved;
        }
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CyberSecTracker();
});
