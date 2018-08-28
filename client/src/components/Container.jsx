import React, { Component } from 'react';
import Register from './Register.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Register />
      </div>
    );
  }
}

export default Container;
