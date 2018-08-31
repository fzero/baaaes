import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Homepage from './tutorial/HomePage';
import Register from './tutorial/Register';
import CreateMnemonic from './tutorial/CreateMnemonic';
import ConfirmMnemonic from './tutorial/ConfirmMnemonic';
import PublicKey from './tutorial/PublicKey';
import PrivateKey from './tutorial/PrivateKey';
import TestWallet from './tutorial/TestWallet';
import CoinInfo from './tutorial/CoinInfo';
import SampleBuy from './tutorial/SampleBuy';
import SampleSell from './tutorial/SampleSell';
import BlockchainExplorer from './tutorial/BlockchainExplorer';
import TutorialCompletion from './tutorial/TutorialCompletion';
// will not live here forever...
import Mnemonic from './Mnemonic';
import Market from './Market';
import Wallets from './Wallets';
import MakeWallet from './MakeWallet';
// Generate Random Bitcoin Mnemonic -> Private Key (WIF) -> Public Key
// This will be a "test wallet" but the keys will correspond with real bitcoin addresses
import generator from '../helpers/generator';
const generated = generator();

class Tutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      mnemonic: generated.mnemonic,
      publ: generated.address,
      priv: generated.wif
    };
  }
  render() {
    console.log(this.state.mneominic);
    return (
      <div className="tutorial container">
        <Route path="/mnemonic" component={Mnemonic} />
        {/* Market Page */}
        <Route path="/market" component={Market} />
        {/* Make new Wallet */}
        <Route path="/makewallet" component={MakeWallet} />
        {/* Wallets Page */}
        <Route path="/wallets" component={Wallets} />
        <Switch>
          {/* Home Page */}
          <Route path="/home" exact component={Homepage} />
          {/* Registration Page */}
          <Route path="/register" component={Register} />
          {/* Create Mnemonic/Recovery */}
          <Route
            path="/createmnemonic"
            render={props => (
              <CreateMnemonic {...props} mnemonic={this.state.mnemonic} />
            )}
          />
          {/* Confirm Recovery */}
          <Route
            path="/confirmmnemonic"
            render={props => (
              <ConfirmMnemonic {...props} mnemonic={this.state.mnemonic} />
            )}
          />
          {/* What is a Public Key? */}
          <Route
            path="/publickey"
            render={props => (
              <PublicKey {...props} mnemonic={this.state.publ} />
            )}
          />
          {/* What is a Private Key? */}
          <Route
            path="/privatekey"
            render={props => (
              <PrivateKey {...props} mnemonic={this.state.priv} />
            )}
          />
          {/* Create Test Wallet */}
          <Route path="/testwallet" component={TestWallet} />
          {/* Descriptions of Top Coins */}
          <Route path="/coininfo" component={CoinInfo} />
          {/* Sample Buy Transaction */}
          <Route path="/samplebuy" component={SampleBuy} />
          {/* Sample Sell Transaction */}
          <Route path="/samplesell" component={SampleSell} />
          {/* Example Blockchain Explorer */}
          <Route path="/blockchainexplorer" component={BlockchainExplorer} />
          {/* Tutorial Completed Messsage */}
          <Route path="/tutorialcomplete" component={TutorialCompletion} />
          {/* THESE ROUTES (BELOW) DO NOT BELONG HERE AND WILL BE MOVED */}
          {/* Create Real Mnemonic */}
        </Switch>
      </div>
    );
  }
}
export default Tutorial;
