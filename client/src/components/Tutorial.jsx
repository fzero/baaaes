import React, { Component } from 'react';
import { DottedProgress } from 'react-progress-ui';
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
import Login from './Login';
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

  pageForwards = () => {
    this.setState({ page: this.state.page + 1 });
  };

  pageBackwards = () => {
    this.setState({ page: this.state.page - 1 });
  };

  pageReset = () => {
    this.setState({ page: 1 });
  };

  render() {
    return (
      <div className="tutorial container">
        <DottedProgress numSteps={12} activeStep={this.state.page} />
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

        <Switch>
          {/* Home Page */}
          <Route
            path="/home"
            render={props => (
              <Homepage
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
              />
            )}
          />
          {/* Registration Page */}
          <Route
            path="/register"
            render={props => (
              <Register
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
              />
            )}
          />
          {/* Create Mnemonic/Recovery */}
          <Route
            path="/createmnemonic"
            render={props => (
              <CreateMnemonic
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
                mnemonic={this.state.mnemonic}
              />
            )}
          />
          {/* Confirm Recovery */}
          <Route
            path="/confirmmnemonic"
            render={props => (
              <ConfirmMnemonic
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
                mnemonic={this.state.mnemonic}
              />
            )}
          />
          {/* What is a Public Key? */}
          <Route
            path="/publickey"
            render={props => (
              <PublicKey
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
                mnemonic={this.state.publ}
              />
            )}
          />
          {/* What is a Private Key? */}
          <Route
            path="/privatekey"
            render={props => (
              <PrivateKey
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
                mnemonic={this.state.priv}
              />
            )}
          />
          {/* Create Test Wallet */}
          <Route
            path="/testwallet"
            render={props => (
              <TestWallet
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
              />
            )}
          />
          {/* Descriptions of Top Coins */}
          <Route
            path="/coininfo"
            render={props => (
              <CoinInfo
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
              />
            )}
          />
          {/* Sample Buy Transaction */}
          <Route
            path="/samplebuy"
            render={props => (
              <SampleBuy
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
              />
            )}
          />
          {/* Sample Sell Transaction */}
          <Route
            path="/samplesell"
            render={props => (
              <SampleSell
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
              />
            )}
          />
          {/* Example Blockchain Explorer */}
          <Route
            path="/blockchainexplorer"
            render={props => (
              <BlockchainExplorer
                {...props}
                pageForwards={this.pageForwards}
                pageBackwards={this.pageBackwards}
              />
            )}
          />
          {/* Tutorial Completed Messsage */}
          <Route
            path="/tutorialcomplete"
            render={props => (
              <TutorialCompletion {...props} pageReset={this.pageReset} />
            )}
          />
          {/* THESE ROUTES (BELOW) DO NOT BELONG HERE AND WILL BE MOVED */}
          {/* Create Real Mnemonic */}
        </Switch>
      </div>
    );
  }
}
export default Tutorial;
