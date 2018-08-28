import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="register">
        <form>
          <h2>Register a new account!</h2>
          <ul>
            <div>
              Email:
              <input type="text" />
            </div>
            <div>
              Username:
              <input type="text" />
            </div>
            <div>
              Password:
              <input type="password" />
            </div>
            <div>
              Confirm Password:
              <input type="password" />
            </div>
            <input type="submit" />
          </ul>
        </form>
      </div>
    );
  }
}

export default Register;
