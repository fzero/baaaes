import React, { Component } from 'react';

// import Tutoral
import Tutorial from './components/Tutorial.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wallet-Cryptorial</h1>
        </header>
        <Tutorial />
      </div>
    );
  }
}

export default App;
