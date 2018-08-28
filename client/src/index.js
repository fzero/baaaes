import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
// Import Stylesheets
import './styles/index.css';
import './styles/App.css';
import './styles/Container.css';

// ReactDOM Render App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
