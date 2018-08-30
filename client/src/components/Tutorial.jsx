import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Homepage from './HomePage';
import Register from './Register';
import CreateMneumonic from './CreateMneumonic';
import ConfirmMneumonic from './ConfirmMneumonic';
import PublicKey from './PublicKey';
import PrivateKey from './PrivateKey';
import CreateWallet from './CreateWallet';
import CoinInfo from './CoinInfo';
import SampleBuy from './SampleBuy';
import SampleSell from './SampleSell';
import BlockchainExplorer from './BlockchainExplorer';
import TutorialCompletion from './TutorialCompletion';
import Market from './Market';
import Wallets from './Wallets';

const Tutorial = props => (
  <div className="tutorial container">
    <Switch>
      {/* Home Page */}
      <Route path="/home" exact component={Homepage} />
      {/* Registration Page */}
      <Route path="/register" component={Register} />
      {/* Create Mnemonic/Recovery */}
      <Route path="/createmneumonic" component={CreateMneumonic} />
      {/* Confirm Recovery */}
      <Route path="/confirmmneumonic" component={ConfirmMneumonic} />
      {/* What is a Public Key? */}
      <Route path="/publickey" component={PublicKey} />
      {/* What is a Private Key? */}
      <Route path="/privatekey" component={PrivateKey} />
      {/* Create Test Wallet */}
      <Route path="/createwallet" component={CreateWallet} />
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
      {/* Wallets Page */}
      <Route path="/wallets" component={Wallets} />
    </Switch>
  </div>
);

export default Tutorial;
