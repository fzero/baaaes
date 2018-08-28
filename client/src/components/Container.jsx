import React, { Component } from 'react';
import Register from './Register.jsx';
import Homepage from './homePage.jsx'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Register />
        <div><Homepage /></div>
      </div>
    )
  }
}

export default Container;
