import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  // Event handler for user info
  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.state);

    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).catch(e => console.log(e));

    // submit form
    this.props.history.push('/createmnemonic');
  };

  setEmail = ev => {
    this.setState({ email: ev.target.value });
  };

  setUsername = ev => {
    this.setState({ username: ev.target.value });
  };

  setPassword = ev => {
    this.setState({ password: ev.target.value });
  };

  setPasswordConfirm = ev => {
    this.setState({ passwordConfirmation: ev.target.value });
  };

  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3>Registering a Wallet</h3>
          <p>
            Before the actual creation of your test cryptocurrency wallet, you
            will need to register an account. Your email, username, password and
            your public key, which will be discussed later, will be what you use
            to access your account and wallet in the future.
          </p>
        </section>

        <section className="component">
          <h3>Register a new account!</h3>
          <form className="register" onSubmit={this.handleSubmit}>
            <label>
              Email:
              <br />
              <input
                type="email"
                onChange={this.setEmail}
                value={this.state.email}
              />
              <br />
            </label>
            <label>
              Username:
              <br />
              <input
                type="text"
                onChange={this.setUsername}
                value={this.state.username}
              />
              <br />
            </label>
            <label>
              Password:
              <br />
              <input
                type="password"
                onChange={this.setPassword}
                value={this.state.password}
              />
              <br />
            </label>
            <label>
              Confirm Password:
              <br />
              <input
                type="password"
                onChange={this.setPasswordConfirm}
                value={this.state.passwordConfirmation}
              />
              <br />
            </label>
            <button type="submit">Submit</button>
          </form>
          <br />
          <Link to={'/home'}>Return</Link>
        </section>
      </main>
    );
  }
}

export default Register;
