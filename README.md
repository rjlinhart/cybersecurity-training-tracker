# 🛡️ Cybersecurity Training Tracker

A comprehensive web-based progress tracking application for cybersecurity learning and penetration testing training.

## 📋 Overview

This application provides a structured 6-month cybersecurity curriculum with interactive progress tracking, designed for beginners starting their journey in cybersecurity and penetration testing.

## 🚀 Features

### 🎯 Core Learning Features
- **📊 Progress Tracking**: Visual progress bars and completion statistics
- **🏆 Achievement System**: Unlockable badges and milestones
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices
- **📝 Note Taking**: Built-in quick notes functionality
- **🎯 Gamification**: Streaks, time tracking, and performance metrics

### 💾 Storage Options
- **🌐 Database Mode**: Full-featured with analytics and multi-device sync
- **📱 Simple Mode**: Browser localStorage for offline-only usage

### 🔄 Advanced Features (Database Mode)
- **Real-time Sync**: Progress saved to database with offline fallback
- **📈 Analytics**: Daily progress charts and learning insights
- **🔄 Multi-device**: Access from any device with automatic sync
- **📊 Detailed Tracking**: Time investment and learning patterns

## 📚 Curriculum Structure

### Phase 1: Foundations (Weeks 1-4)
- Basic Programming & Command Line
- Networking Basics

### Phase 2: Security Fundamentals (Weeks 5-8)
- Web Security
- System Security & Cryptography

### Phase 3: Penetration Testing (Weeks 9-16)
- Web Application Testing
- Network Penetration Testing

### Phase 4: Advanced Topics (Weeks 17-24)
- Specialized Areas (Forensics, Malware Analysis)
- Capstone Projects & CTFs

## 🛠️ Installation

### Option 1: 🌐 Database Mode (Recommended)
Enhanced features with persistent storage and analytics

**Windows:**
```powershell
# Clone and setup
git clone https://github.com/rjlinhart/cybersec-training-tracker.git
cd cybersec-training-tracker

# Run the startup script
.\start-database.ps1
```

**macOS/Linux:**
```bash
# Clone and setup
git clone https://github.com/rjlinhart/cybersec-training-tracker.git
cd cybersec-training-tracker

# Install dependencies and start
cd server
npm install
node scripts/migrate.js
npm start
```

**Then visit**: http://localhost:3000

### Option 2: 📱 Simple Mode
Basic functionality with browser storage only

**Windows:**
```powershell
# Clone and start
git clone https://github.com/rjlinhart/cybersec-training-tracker.git
cd cybersec-training-tracker

# Run simple mode
.\start-simple.ps1
```

**Any OS:**
```bash
git clone https://github.com/rjlinhart/cybersec-training-tracker.git
cd cybersec-training-tracker

# Start simple HTTP server
python -m http.server 8000        # Windows/Linux
python3 -m http.server 8000       # macOS
```

**Then visit**: http://localhost:8000

### Platform-Specific Setup Guides

#### 🍎 macOS Users
**Option 1: Quick Setup Script**
```bash
# Clone repository
git clone https://github.com/rjlinhart/cybersec-training-tracker.git
cd cybersec-training-tracker

# Run automated setup script
chmod +x setup-macos.sh
./setup-macos.sh
```

**Option 2: Manual Setup**
For complete VS Code setup and configuration, see: **[macOS Setup Guide](docs/MACOS_SETUP.md)**
- VS Code installation and configuration
- Homebrew and development tools setup
- Step-by-step terminal instructions
- Troubleshooting for Mac-specific issues

#### 🪟 Windows Users
**Option 1: Quick Setup Script**
```powershell
# Clone repository
git clone https://github.com/rjlinhart/cybersec-training-tracker.git
cd cybersec-training-tracker

# Run automated setup script
.\setup-windows.ps1
```

**Option 2: Manual Setup**
```powershell
# Manual installation
python -m http.server 8000
# Then visit http://localhost:8000
```

#### 🐧 Linux Users
```bash
# Install git if needed
sudo apt update && sudo apt install git python3

# Clone and run
git clone https://github.com/rjlinhart/cybersec-training-tracker.git
cd cybersec-training-tracker
python3 -m http.server 8000
```

## 💻 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: LocalStorage API
- **Icons**: Font Awesome
- **Design**: CSS Grid, Flexbox, Responsive Design

## 📖 Usage

1. **Getting Started**:
   - Open the application in your web browser
   - Navigate through phases using the top navigation tabs
   - Check off tasks as you complete them

2. **Progress Tracking**:
   - Monitor your overall progress in the header
   - View detailed week-by-week completion rates
   - Track time invested and achievement unlocks

3. **Features**:
   - **Quick Notes**: Use the sidebar to jot down learning notes
   - **Achievements**: Unlock badges by reaching milestones
   - **Statistics**: Monitor your learning patterns and progress

## 🎯 Learning Path

### Recommended Tools & Platforms
- **TryHackMe** - Beginner cybersecurity training
- **HackTheBox** - Advanced penetration testing
- **PortSwigger Web Security Academy** - Web security labs
- **Kali Linux** - Penetration testing distribution

### Essential Tools Covered
- Burp Suite
- Nmap
- Metasploit
- Wireshark
- John the Ripper
- Hashcat

## 🏆 Achievement System

- 🎯 **First Steps**: Complete your first task
- 📅 **Week Warrior**: Complete a full week
- 💻 **Code Ninja**: Complete 10 coding tasks
- 🔬 **Lab Expert**: Complete 15 lab exercises
- 🏆 **Phase Champion**: Complete an entire phase
- 🔥 **Consistent Learner**: 7-day learning streak
- 👑 **Cybersec Master**: Complete entire curriculum

## 📱 Screenshots

![Dashboard Overview](docs/images/dashboard.png)
![Progress Tracking](docs/images/progress.png)
![Achievement System](docs/images/achievements.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have questions or need help getting started:

- 📧 Create an issue in this repository
- 💬 Check the [Wiki](../../wiki) for detailed guides
- 🎯 Review the curriculum documentation

## 🔮 Future Enhancements

- [ ] User authentication and cloud sync
- [ ] Progress sharing and social features
- [ ] Integration with learning platforms APIs
- [ ] Mobile app version
- [ ] Advanced analytics and reporting
- [ ] Certification tracking
- [ ] Mentor connection system

## 🙏 Acknowledgments

- OWASP for security guidelines
- Penetration testing community resources
- Open source security tools and frameworks

---

**Happy Learning! 🚀 Stay curious, stay secure! 🛡️**
