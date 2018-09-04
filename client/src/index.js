// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// App Componenet
import App from "./App.jsx";

// Service Worker
import registerServiceWorker from "./registerServiceWorker";
// Import Stylesheets

import "./styles/index.css";
import "./styles/App.css";
import "./styles/Tutorial.css";
import "./styles/register.css";
import "./styles/landing.css";

import "./styles/tutorialStyles/homepage.css";
import "./styles/tutorialStyles/createmnemonic.css";
import "./styles/tutorialStyles/privatekey.css";
import "./styles/tutorialStyles/publickey.css";
import "./styles/tutorialStyles/coininfo.css";
import "./styles/tutorialStyles/samplebuy.css";
import "./styles/tutorialStyles/samplesell.css";
import "./styles/tutorialStyles/blockchainexplorer.css";

// ReactDOM Render App
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
