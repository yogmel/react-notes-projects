console.log('App.js is running')

// JSX - Javascript XML
// babel cmd, run on indecision-app
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
var template = <p>This is JSX from app.js from src</p>
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot) 