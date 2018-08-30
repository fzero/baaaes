import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3>Registering a Wallet</h3>
          <p>
            Before the actual creation of your test cryptocurrency wallet, you will 
            need to register an account. Your email, username, password and your 
            public key, which will be discussed later, will be what you use to 
            access your account and wallet in the future.
          </p>
        </section>

        <section className="component">
          <h3>Register a new account!</h3>
          <form className="register">
            Email:<br/>
            <input type="email" /><br/>
            Username:<br/>
            <input type="text" /><br/>
            Password:<br/>
            <input type="password" /><br/>
            Confirm Password:<br/>
            <input type="password" /><br/>
            <button><Link to={'/'}>Return</Link></button>
            <button><Link to={'/createmneumonic'}>Submit</Link></button>
          </form>
        </section>
      </main>
    );
  }
}

export default Register;
