import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";

// import container
import Tutorial from "./components/Tutorial";
// import TutorialComplete from "./components/TutorialComplete";
// import Login from "./components/Login.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Wallet Cryptorial</h1>
          <Link to={"/login"}>Login</Link>
          {/*<Route path="/login" component={Login} />*/}
        </header>
        <div className="app-centering">
          <Tutorial />
          {/*<TutorialComplete />*/}
        </div>
        {/*if statement to add TutorialComplete*/}
      </div>
    );
  }
}

export default App;
