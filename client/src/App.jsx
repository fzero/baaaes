import React, { Component } from "react";
import { Route } from "react-router-dom";

// import container
import Homepage from "./components/Homepage.jsx";
import Tutorial from "./components/homePage/Tutorial.jsx";
import Register from "./components/homePage/Register.jsx";
// import TutorialComplete from "./components/TutorialComplete";
// import Login from "./components/Login.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Wallet Cryptorial</h1>
        </header>
        <Route path="/" exact component={Homepage} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
