import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes within
import Mnemonic from "./tutorialComplete/Mnemonic";
import Market from "./tutorialComplete/Market";
import Wallets from "./tutorialComplete/Wallets";
import MakeWallet from "./tutorialComplete/MakeWallet";

class TutorialComplete extends Component {
  render() {
    return (
      <Switch className="complete">
        {/* Mnemonic Page */}
        <Route path="/mnemonic" component={Mnemonic} />
        {/* Market Page */}
        <Route path="/market" component={Market} />
        {/* Make new Wallet */}
        <Route path="/makewallet" component={MakeWallet} />
        {/* Wallets Page */}
        <Route path="/wallets" component={Wallets} />
      </Switch>
    );
  }
}
export default TutorialComplete;
