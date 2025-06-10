# Cybersecurity Training Tracker - Simple Mode Startup Script
# Run this script to start the application in simple mode (no database)

Write-Host "📱 Starting Cybersecurity Training Tracker (Simple Mode)" -ForegroundColor Green
Write-Host "=========================================================" -ForegroundColor Cyan

# Check if Python is available
try {
    $pythonVersion = python --version
    Write-Host "✅ Python detected: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Python not found. Please install Python from https://python.org" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Starting Simple File Server!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Server: http://localhost:8000" -ForegroundColor Yellow
Write-Host "💾 Storage: Browser LocalStorage only" -ForegroundColor Yellow
Write-Host "📱 Features: Basic progress tracking, offline-only" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

# Start simple HTTP server
python -m http.server 8000
