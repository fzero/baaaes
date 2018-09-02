import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes within
import Login from "./tutorialComplete/Login";
import Mnemonic from "./tutorialComplete/Mnemonic";
import Market from "./tutorialComplete/Market";
import Wallets from "./tutorialComplete/Wallets";
import MakeWallet from "./tutorialComplete/MakeWallet";

// Generate Random Bitcoin Mnemonic -> Private Key (WIF) -> Public Key
// This will be a "test wallet" but the keys will correspond with real bitcoin addresses
import generator from "../helpers/generator";
const generated = generator();

class TutorialComplete extends Component {
  render() {
    return (
      <section>
        {/* Login Page */}
        <Route path="/login" component={Login} />
        {/* Mnemonic Page */}
        <Route path="/mnemonic" component={Mnemonic} />
        {/* Market Page */}
        <Route path="/market" component={Market} />
        {/* Make new Wallet */}
        <Route path="/makewallet" component={MakeWallet} />
        {/* Wallets Page */}
        <Route path="/wallets" component={Wallets} />
      </section>
    );
  }
}
