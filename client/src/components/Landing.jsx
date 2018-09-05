import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <section className="landing_cont">
        <div className="landing_reg">
          <h2 className="landing_reg-title">Wallet Tutorial</h2>
          <p>
            Welcome to Cryptorial, a 10 step tutorial that focuses on the buying
            and selling of Bitcoin, as well as other cryptocoins. Here you will
            learn everything from how to create your very own crypto-wallet, to
            what cryptocurrency is, and how the blockchain functions. A lot of
            these words may seem unfamiliar to you at first, but in a short
            while, you will know enough to create a real crypto-wallet and have
            the knowledge to buy your own coins. To begin, click the register
            button below and let's get started!
          </p>
          <Link className="button" to={"/register"}>
            Register
          </Link>
        </div>
        <div className="landing_log">
          <h2 className="landing_reg-title">Create Wallets</h2>
          <p>Already have an account? Enter here to skip the tutorial.</p>
          <Link className="button" to={"/login"}>
            Login
          </Link>
        </div>
      </section>
    );
  }
}

export default Landing;
