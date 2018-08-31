import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Homepage from './HomePage';
import Register from './Register';
import CreateMnemonic from './CreateMnemonic';
import ConfirmMnemonic from './ConfirmMnemonic';
import PublicKey from './PublicKey';
import PrivateKey from './PrivateKey';
import TestWallet from './TestWallet';
import CoinInfo from './CoinInfo';
import SampleBuy from './SampleBuy';
import SampleSell from './SampleSell';
import BlockchainExplorer from './BlockchainExplorer';
import TutorialCompletion from './TutorialCompletion';
import Market from './Market';
import Wallets from './Wallets';
import MakeWallet from './MakeWallet';
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
      <div className="container">
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
          {/* Market Page */}
          <Route path="/market" component={Market} />
          {/* Make new Wallet */}
          <Route path="/makewallet" component={MakeWallet} />
          {/* Wallets Page */}
          <Route path="/wallets" component={Wallets} />
        </Switch>
      </div>
    );
  }
}
export default Tutorial;
