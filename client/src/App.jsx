import React, { Component } from "react";

// import container
import Tutorial from "./components/Tutorial";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Wallet Cryptorial</h1>
        </header>
        <Tutorial />
        {/*if statement to add TutorialComplete*/}
      </div>
    );
  }
}

export default App;
