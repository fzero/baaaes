import React, { Component } from 'react';

// import container
// import Tutorial from './components/Tutorial';
import TutorialComplete from './components/TutorialComplete';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Wallet Cryptorial</h1>
        </header>
        <div className="app-centering">
          {/* <Tutorial /> */}
          <TutorialComplete />
        </div>
        {/*if statement to add TutorialComplete*/}
      </div>
    );
  }
}

export default App;
