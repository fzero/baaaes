import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <section className="landing_cont">
        <div className="landing_reg">
          <h3>Wallet Tutorial</h3>
          <Link className="button" to={"/register"}>
            Register
          </Link>
        </div>
        <div className="landing_log">
          <h3>Create Wallets</h3>
          <Link className="button" to={"/login"}>
            Login
          </Link>
        </div>
      </section>
    );
  }
}

export default Landing;
