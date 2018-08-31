import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Homepage from './tutorial/HomePage.jsx';
import Register from './tutorial/Register.jsx';
import CreateMneumonic from './tutorial/CreateMneumonic.jsx';
import ConfirmMneumonic from './tutorial/ConfirmMneumonic.jsx';
import PublicKey from './tutorial/PublicKey.jsx';
import PrivateKey from './tutorial/PrivateKey.jsx';
import CreateWallet from './tutorial/CreateWallet.jsx';
import CoinInfo from './tutorial/CoinInfo.jsx';
import SampleBuy from './tutorial/SampleBuy.jsx';
import SampleSell from './tutorial/SampleSell.jsx';
import BlockchainExplorer from './tutorial/BlockchainExplorer.jsx';
import TutorialCompletion from './tutorial/TutorialCompletion.jsx';
import Market from './Market.jsx';
import Wallets from './Wallets.jsx';
import MakeWallet from './MakeWallet.jsx';

const Container = props => (
  <div className="container">
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
      {/* Make new Wallet */}
      <Route path="/makewallet" component={MakeWallet} />
      {/* Wallets Page */}
      <Route path="/wallets" component={Wallets} />
    </Switch>
  </div>
);

export default Container;
