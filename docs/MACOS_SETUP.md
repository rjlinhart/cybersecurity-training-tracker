# 🍎 macOS Setup Guide for VS Code

Complete setup instructions for getting the Cybersecurity Training Tracker running on macOS with Visual Studio Code.

## 📋 Prerequisites

### System Requirements
- macOS 10.14 (Mojave) or later
- At least 4GB of RAM
- 2GB of free disk space
- Internet connection

### Required Software
- **Visual Studio Code** - Code editor
- **Git** - Version control
- **Python 3** - For local web server
- **Node.js** (optional) - For development tools

## 🛠️ Step 1: Install Required Software

### Install Homebrew (Package Manager)
Open Terminal and run:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install Git
```bash
brew install git
```

### Install Python 3 (if not already installed)
```bash
brew install python3
```

### Install Node.js (Optional - for development tools)
```bash
brew install node
```

### Install Visual Studio Code
1. **Download VS Code**: Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Install**: Download the .zip file and extract to Applications folder
3. **Add to PATH**: Open VS Code, press `Cmd+Shift+P`, type "shell command", and select "Install 'code' command in PATH"

## 📁 Step 2: Clone the Repository

### Option A: Using Terminal
```bash
# Navigate to your projects directory
cd ~/Documents
mkdir Projects
cd Projects

# Clone the repository
git clone https://github.com/rjlinhart/cybersec-training-tracker.git

# Navigate into the project
cd cybersec-training-tracker
```

### Option B: Using VS Code
1. Open VS Code
2. Press `Cmd+Shift+P` to open command palette
3. Type "Git: Clone" and select it
4. Enter repository URL: `https://github.com/rjlinhart/cybersec-training-tracker.git`
5. Choose a folder to clone into (e.g., `~/Documents/Projects`)
6. Click "Open" when prompted

## 🚀 Step 3: Open Project in VS Code

### From Terminal
```bash
# Navigate to project directory
cd ~/Documents/Projects/cybersec-training-tracker

# Open in VS Code
code .
```

### From VS Code
1. Open VS Code
2. Go to **File** → **Open Folder**
3. Navigate to your cloned project folder
4. Click **Open**

## 🔧 Step 4: Install Recommended VS Code Extensions

VS Code will likely prompt you to install recommended extensions. Click **Install All** or install manually:

### Essential Extensions
1. **Live Server** - For live preview
   - Press `Cmd+Shift+X` to open Extensions
   - Search for "Live Server"
   - Install by Ritwick Dey

2. **Prettier** - Code formatter
   - Search for "Prettier - Code formatter"
   - Install by Prettier

3. **ESLint** - JavaScript linting
   - Search for "ESLint"
   - Install by Dirk Baeumer

### Optional but Helpful
- **Auto Rename Tag** - HTML tag editing
- **Bracket Pair Colorizer** - Color matching brackets
- **GitLens** - Enhanced Git capabilities
- **Material Icon Theme** - Better file icons

## 🌐 Step 5: Start the Application

### Method 1: Using Python HTTP Server (Recommended)
1. **Open Terminal in VS Code**: Press `Ctrl+`` (backtick) or go to **Terminal** → **New Terminal**
2. **Start the server**:
   ```bash
   python3 -m http.server 8000
   ```
3. **Open in browser**: Go to [http://localhost:8000](http://localhost:8000)

### Method 2: Using Live Server Extension
1. **Right-click** on `index.html` in the Explorer panel
2. **Select** "Open with Live Server"
3. **Browser opens automatically** with live reload capability

### Method 3: Direct File Opening
1. **Double-click** `index.html` in Finder
2. **File opens** in your default browser
3. **Note**: Some features may not work due to CORS restrictions

## 📝 Step 6: Verify Installation

### Check the Application
1. **Open the app** in your browser
2. **Verify features**:
   - ✅ Navigation tabs work (Phase 1, 2, 3, 4)
   - ✅ Tasks can be checked/unchecked
   - ✅ Progress statistics update
   - ✅ "View Content" buttons expand detailed curriculum
   - ✅ Notes can be saved in sidebar

### Test Content Features
1. **Click** on Phase 1: Foundations
2. **Find** "Python Variables and Data Types" task
3. **Click** "View Content" button
4. **Verify** you see:
   - Learning objectives
   - Theory section with code examples
   - Interactive lab exercises
   - Additional resources

## 🔧 Development Setup (Optional)

If you want to contribute or modify the code:

### Install Development Dependencies
```bash
# Navigate to project directory
cd cybersec-training-tracker

# Install Node.js dependencies
npm install
```

### Available Development Commands
```bash
# Start development server with live reload
npm run dev

# Format code
npm run format

# Lint JavaScript
npm run lint

# Build for production
npm run build
```

### VS Code Workspace Settings
Create `.vscode/settings.json` for project-specific settings:
```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "files.associations": {
        "*.js": "javascript"
    }
}
```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue: "python3: command not found"
**Solution**: Install Python 3 using Homebrew:
```bash
brew install python3
```

#### Issue: Port 8000 already in use
**Solution**: Use a different port:
```bash
python3 -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080)

#### Issue: Live Server not working
**Solution**: 
1. Ensure Live Server extension is installed
2. Right-click directly on `index.html`
3. Try restarting VS Code

#### Issue: Git clone permission denied
**Solution**: Set up SSH keys or use HTTPS with personal access token:
```bash
# Configure Git with your details
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Issue: Application not loading properly
**Solutions**:
1. **Check browser console** for errors (F12 → Console)
2. **Verify file paths** are correct
3. **Try incognito/private mode** to bypass cache
4. **Ensure all files downloaded** properly

### Getting Help
- **Check browser console**: Press F12 and look for errors
- **VS Code problems panel**: View → Problems
- **Project documentation**: Check the `docs/` folder
- **GitHub issues**: Create an issue if problems persist

## 📱 Mobile Testing

To test on mobile devices on the same network:

1. **Find your Mac's IP address**:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```

2. **Start server** on your Mac:
   ```bash
   python3 -m http.server 8000
   ```

3. **Access from mobile device**: 
   - Go to `http://YOUR_MAC_IP:8000`
   - Example: `http://192.168.1.100:8000`

## 🎯 Next Steps

Once you have the application running:

1. **Explore the curriculum** - Check out all 4 phases
2. **Try the interactive labs** - Start with Python basics
3. **Track your progress** - Mark tasks as complete
4. **Use the notes feature** - Document your learning
5. **Customize if needed** - Modify content for your learning style

## 🔗 Useful macOS Shortcuts

### VS Code Shortcuts
- `Cmd+Shift+P` - Command palette
- `Cmd+`` - Toggle terminal
- `Cmd+Shift+E` - Explorer panel
- `Cmd+Shift+F` - Search across files
- `Cmd+/` - Toggle comment
- `Cmd+S` - Save file
- `Cmd+Shift+L` - Select all occurrences

### Terminal Shortcuts
- `Cmd+T` - New terminal tab
- `Cmd+K` - Clear terminal
- `Ctrl+C` - Stop running process
- `↑/↓ arrows` - Navigate command history

---

**Happy coding! 🚀 You're now ready to start your cybersecurity learning journey!**
