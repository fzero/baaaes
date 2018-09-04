import React, { Component } from 'react';
// import Resource from '../models/resource.js';
// const User = Resource('users');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validateUser = () => {};

  render() {
    return (
      <section className="noDescription">
        <h3>Login!</h3>
        <form onSubmit={this.validateUser}>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
}

export default Login;
