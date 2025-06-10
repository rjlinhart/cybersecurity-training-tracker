#!/bin/bash

# 🍎 Cybersec Training Tracker - macOS Quick Setup Script
# This script automates the setup process for macOS users

echo "🛡️  Cybersecurity Training Tracker Setup"
echo "========================================"
echo ""

# Check if we're on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ This script is designed for macOS only."
    echo "For other platforms, see the documentation in docs/"
    exit 1
fi

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "🔍 Checking prerequisites..."

# Check for Homebrew
if ! command_exists brew; then
    echo "📦 Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    echo "✅ Homebrew is already installed"
fi

# Check for Git
if ! command_exists git; then
    echo "📥 Installing Git..."
    brew install git
else
    echo "✅ Git is already installed"
fi

# Check for Python 3
if ! command_exists python3; then
    echo "🐍 Installing Python 3..."
    brew install python3
else
    echo "✅ Python 3 is already installed"
fi

# Check for Node.js (optional)
if ! command_exists node; then
    echo "📦 Installing Node.js (optional for development)..."
    brew install node
else
    echo "✅ Node.js is already installed"
fi

# Check for VS Code
if ! command_exists code; then
    echo "⚠️  VS Code 'code' command not found in PATH"
    echo "Please install VS Code from https://code.visualstudio.com/"
    echo "After installation, open VS Code and install the 'code' command:"
    echo "1. Press Cmd+Shift+P"
    echo "2. Type 'shell command'"
    echo "3. Select 'Install code command in PATH'"
    echo ""
    read -p "Press Enter when you've completed this setup..."
else
    echo "✅ VS Code is ready"
fi

echo ""
echo "🚀 Starting the application..."

# Check if we're already in the project directory
if [[ ! -f "index.html" ]]; then
    echo "❌ index.html not found. Please run this script from the project root directory."
    echo "Example: cd ~/Documents/Projects/cybersec-training-tracker && ./setup-macos.sh"
    exit 1
fi

# Start the Python server in background
echo "🌐 Starting Python HTTP server on port 8000..."
python3 -m http.server 8000 &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Open browser
echo "🔗 Opening browser..."
open http://localhost:8000

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 What's running:"
echo "   • Python HTTP server on http://localhost:8000"
echo "   • PID: $SERVER_PID"
echo ""
echo "🛑 To stop the server:"
echo "   kill $SERVER_PID"
echo "   or press Ctrl+C in the terminal"
echo ""
echo "📚 Next steps:"
echo "   1. Explore the curriculum phases"
echo "   2. Click 'View Content' on tasks to see detailed labs"
echo "   3. Check off tasks as you complete them"
echo "   4. Use the notes section to document your learning"
echo ""
echo "📖 For detailed documentation, see:"
echo "   • docs/MACOS_SETUP.md - Complete setup guide"
echo "   • docs/USER_GUIDE.md - How to use the application"
echo "   • docs/CURRICULUM.md - Detailed curriculum information"
echo ""
echo "Happy learning! 🎯"

# Keep script running so server stays active
echo "Press Ctrl+C to stop the server and exit"
wait $SERVER_PID
