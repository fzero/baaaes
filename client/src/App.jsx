import React, { Component } from 'react';

// import container
import Container from './components/Container.jsx';
import Register from './components/Register.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wallet-Cryptorial</h1>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
