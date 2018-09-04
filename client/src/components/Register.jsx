import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resource from '../models/resource.js';
const User = Resource('users');

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
    // log info input into register

    User.create(this.state)

      .then(result => localStorage.setItem('userid', result.data.data.id))
      .then(() => this.props.history.push('/tutorial'))
      .catch(e => alert(e));
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
      <main className="register_container">
        <section className="componentContainer">
          <div className="register_desc">
            <h3 className="register_desc-title">Registering a Wallet</h3>
            <p className="register_desc-para">
              Before the actual creation of your test cryptocurrency wallet, you
              will need to register an account. Your account will allow access
              to your real and fake wallets using your email, username,
              password. For further security to your wallets, a mnemonic phrase
              will be generated, and from that a private key and public key will
              derived, all of which shall be defined later in the Cryptorial.
            </p>
            <Link
              className="buttonBackwards"
              onClick={this.props.pageBackwards}
              to={'/home'}
            >
              <i className="fas fa-arrow-left" />
              Previous Page
            </Link>
          </div>

          <div className="register_comp">
            <h3 className="register_comp-title">Register a new account!</h3>
            <form className="register_comp-form" onSubmit={this.handleSubmit}>
              <label className="register_comp-label">Email:</label>
              <input
                className="register_comp-input"
                type="email"
                onChange={this.setEmail}
                value={this.state.email}
              />
              <label className="register_comp-label">Username:</label>
              <input
                className="register_comp-input"
                type="text"
                onChange={this.setUsername}
                value={this.state.username}
              />
              <label className="register_comp-label">Password:</label>
              <input
                className="register_comp-input"
                type="password"
                onChange={this.setPassword}
                value={this.state.password}
              />
              <label className="register_comp-label">Confirm Password:</label>
              <input
                className="register_comp-input"
                type="password"
                onChange={this.setPasswordConfirm}
                value={this.state.passwordConfirmation}
              />
              <button
                className="buttonSubmit"
                onClick={this.props.pageForwards}
                type="submit"
              >
                Submit
              </button>
            </form>
            <Link onClick={this.props.pageForwards} to={'/tutorial'}>
              Link to tutorial
            </Link>
          </div>
          <footer className="register_footer" />
        </section>
      </main>
    );
  }
}

export default Register;
