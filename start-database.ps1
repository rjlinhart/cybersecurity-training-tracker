# Cybersecurity Training Tracker - Database Mode Startup Script
# Run this script to start the application with database support

Write-Host "🚀 Starting Cybersecurity Training Tracker with Database Support" -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js detected: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check if we're in the correct directory
if (-not (Test-Path "server\package.json")) {
    Write-Host "❌ Please run this script from the project root directory" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
Set-Location "server"

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
}

# Setup database if it doesn't exist
if (-not (Test-Path "database\training.db")) {
    Write-Host "🗄️ Setting up database..." -ForegroundColor Yellow
    node scripts/migrate.js
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Database setup failed" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✅ Database already exists" -ForegroundColor Green
}

# Create .env file if it doesn't exist
if (-not (Test-Path ".env")) {
    Write-Host "⚙️ Creating environment configuration..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
}

Write-Host ""
Write-Host "🎉 Setup Complete!" -ForegroundColor Green
Write-Host "==================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Starting server on http://localhost:3000" -ForegroundColor Yellow
Write-Host "📊 Database: SQLite (./database/training.db)" -ForegroundColor Yellow
Write-Host "🔄 Features: Progress tracking, analytics, offline sync" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

# Start the server
npm start
