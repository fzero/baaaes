import React, { Component } from "react";
import { Link } from "react-router-dom";
import Resource from "../../models/resource.js";
const User = Resource("users");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  // Event handler for user info
  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.state);

    User.create(this.state)
      .then(() => this.props.history.push("/createmnemonic"))
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
      <section className="componentContainer">
        <div className="description">
          <h3 className="register_desc-title">Registering a Wallet</h3>
          <p className="register_desc-para">
            Before the actual creation of your test cryptocurrency wallet, you
            will need to register an account. Your account will allow access to
            your real and fake wallets using your email, username, password. For
            further security to your wallets, a mnemonic phrase will be
            generated, and from that a private key and public key will derived,
            all of which shall be defined later in the Cryptorial.
          </p>
          <Link
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
            to={"/home"}
          >
            Previous Page
          </Link>
        </div>

        <div className="component">
          <h3 className="register-title">Register a new account!</h3>
          <form className="register" onSubmit={this.handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              onChange={this.setEmail}
              value={this.state.email}
            />
            <label>Username:</label>
            <input
              type="text"
              onChange={this.setUsername}
              value={this.state.username}
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              onChange={this.setPasswordConfirm}
              value={this.state.passwordConfirmation}
            />
            <button
              className="buttonForwards"
              onClick={this.props.pageForwards}
              type="submit"
            >
              Submit
            </button>
          </form>
          <Link
            className="buttonForwards"
            onClick={this.props.pageForwards}
            to={"/createmnemonic"}
          >
            Link to createmneumonic
          </Link>
        </div>
      </section>
    );
  }
}

export default Register;
