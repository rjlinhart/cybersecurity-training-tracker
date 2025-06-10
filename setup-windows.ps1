# 🪟 Cybersecurity Training Tracker - Windows Setup Script
# Run this script in PowerShell to quickly set up the application

Write-Host "🛡️  Cybersecurity Training Tracker Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Function to check if a command exists
function Test-Command($command) {
    try {
        if (Get-Command $command -ErrorAction Stop) {
            return $true
        }
    }
    catch {
        return $false
    }
}

Write-Host "🔍 Checking prerequisites..." -ForegroundColor Yellow

# Check for Git
if (Test-Command "git") {
    Write-Host "✅ Git is already installed" -ForegroundColor Green
} else {
    Write-Host "❌ Git not found. Please install Git:" -ForegroundColor Red
    Write-Host "   1. Visit https://git-scm.com/download/win" -ForegroundColor White
    Write-Host "   2. Download and install Git for Windows" -ForegroundColor White
    Write-Host "   3. Restart PowerShell after installation" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter when you've installed Git"
}

# Check for Python
if (Test-Command "python") {
    Write-Host "✅ Python is already installed" -ForegroundColor Green
} else {
    Write-Host "❌ Python not found. Please install Python:" -ForegroundColor Red
    Write-Host "   1. Visit https://www.python.org/downloads/" -ForegroundColor White
    Write-Host "   2. Download Python 3.x for Windows" -ForegroundColor White
    Write-Host "   3. During installation, check 'Add Python to PATH'" -ForegroundColor White
    Write-Host "   4. Restart PowerShell after installation" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter when you've installed Python"
}

# Check for VS Code (optional)
if (Test-Command "code") {
    Write-Host "✅ VS Code is ready" -ForegroundColor Green
} else {
    Write-Host "⚠️  VS Code 'code' command not found" -ForegroundColor Yellow
    Write-Host "For the best development experience:" -ForegroundColor White
    Write-Host "   1. Install VS Code from https://code.visualstudio.com/" -ForegroundColor White
    Write-Host "   2. During installation, check 'Add to PATH'" -ForegroundColor White
    Write-Host "   3. Restart PowerShell after installation" -ForegroundColor White
    Write-Host ""
}

Write-Host ""
Write-Host "🚀 Starting the application..." -ForegroundColor Yellow

# Check if we're in the project directory
if (-not (Test-Path "index.html")) {
    Write-Host "❌ index.html not found. Please run this script from the project root directory." -ForegroundColor Red
    Write-Host "Example:" -ForegroundColor White
    Write-Host "   cd 'C:\Users\$env:USERNAME\Documents\Projects\cybersec-training-tracker'" -ForegroundColor White
    Write-Host "   .\setup-windows.ps1" -ForegroundColor White
    Read-Host "Press Enter to exit"
    exit 1
}

# Start the Python server
Write-Host "🌐 Starting Python HTTP server on port 8000..." -ForegroundColor Green

try {
    # Start server in background job
    $job = Start-Job -ScriptBlock { 
        Set-Location $using:PWD
        python -m http.server 8000 
    }
    
    # Wait a moment for server to start
    Start-Sleep -Seconds 3
    
    # Open browser
    Write-Host "🔗 Opening browser..." -ForegroundColor Green
    Start-Process "http://localhost:8000"
    
    Write-Host ""
    Write-Host "✅ Setup complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 What's running:" -ForegroundColor Cyan
    Write-Host "   • Python HTTP server on http://localhost:8000" -ForegroundColor White
    Write-Host "   • Job ID: $($job.Id)" -ForegroundColor White
    Write-Host ""
    Write-Host "🛑 To stop the server:" -ForegroundColor Yellow
    Write-Host "   Stop-Job -Id $($job.Id)" -ForegroundColor White
    Write-Host "   Remove-Job -Id $($job.Id)" -ForegroundColor White
    Write-Host "   or close this PowerShell window" -ForegroundColor White
    Write-Host ""
    Write-Host "📚 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. Explore the curriculum phases" -ForegroundColor White
    Write-Host "   2. Click 'View Content' on tasks to see detailed labs" -ForegroundColor White
    Write-Host "   3. Check off tasks as you complete them" -ForegroundColor White
    Write-Host "   4. Use the notes section to document your learning" -ForegroundColor White
    Write-Host ""
    Write-Host "📖 For detailed documentation, see:" -ForegroundColor Cyan
    Write-Host "   • docs\SETUP.md - Setup guide" -ForegroundColor White
    Write-Host "   • docs\USER_GUIDE.md - How to use the application" -ForegroundColor White
    Write-Host "   • docs\CURRICULUM.md - Detailed curriculum information" -ForegroundColor White
    Write-Host ""
    Write-Host "Happy learning! 🎯" -ForegroundColor Green
    Write-Host ""
    Write-Host "Press Ctrl+C to stop the server, or close this window" -ForegroundColor Yellow
    
    # Keep script running
    while ($job.State -eq "Running") {
        Start-Sleep -Seconds 5
        
        # Check if user wants to stop
        if ([Console]::KeyAvailable) {
            $key = [Console]::ReadKey($true)
            if ($key.KeyChar -eq 'q' -or $key.Key -eq "Escape") {
                break
            }
        }
    }
    
} catch {
    Write-Host "❌ Error starting server: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Try running manually: python -m http.server 8000" -ForegroundColor Yellow
} finally {
    # Clean up job
    if ($job) {
        Stop-Job -Id $job.Id -ErrorAction SilentlyContinue
        Remove-Job -Id $job.Id -ErrorAction SilentlyContinue
    }
}
