import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import container
import Landing from './components/Landing.jsx';
import Tutorial from './components/Tutorial.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import TutorialComplete from './components/TutorialComplete';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Nav />
        </header>
        <Route path="/" exact component={Landing} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <TutorialComplete />
      </div>
    );
  }
}

export default App;
