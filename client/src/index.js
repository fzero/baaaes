// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// App Componenet
import App from './App.jsx';

// Service Worker
import registerServiceWorker from './registerServiceWorker';
// Import Stylesheets
import './styles/index.css';
import './styles/App.css';
import './styles/Container.css';

// ReactDOM Render App
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
