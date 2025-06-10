# 🚀 Setup Guide

## Quick Start

1. **Clone the repository**:
```powershell
git clone https://github.com/yourusername/cybersec-training-tracker.git
cd cybersec-training-tracker
```

2. **Open in browser**:
```powershell
# Option 1: Direct file opening
# Simply double-click index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- Git
- Modern web browser

### Installation
```powershell
# Install development dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm start` - Start Python HTTP server
- `npm run dev` - Start live-reload development server
- `npm run build` - Build minified production files
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Troubleshooting

### Common Issues

1. **Progress not saving**: Ensure browser allows localStorage
2. **Styles not loading**: Check file paths and server setup
3. **JavaScript errors**: Check browser console for details

### Local Storage

The app uses localStorage to save progress. Data is stored in:
- `cyberSecProgress` - Task completion data
- `quickNotes` - User notes

To reset progress:
```javascript
localStorage.clear()
```
