import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Homepage from './HomePage.jsx';
import Register from './Register.jsx';
import CreateMneumonic from './CreateMneumonic.jsx';
import ConfirmMneumonic from './ConfirmMneumonic.jsx';
import PublicKey from './PublicKey.jsx';
import PrivateKey from './PrivateKey.jsx';
import CreateWallet from './CreateWallet.jsx';
import CoinInfo from './CoinInfo.jsx';
import SampleBuy from './SampleBuy.jsx';
import SampleSell from './SampleSell.jsx';
import BlockchainExplorer from './BlockchainExplorer.jsx';
import TutorialCompletion from './TutorialCompletion.jsx';
import Market from './Market.jsx';
import Wallets from './Wallets.jsx';

// Description
import Description from './Description.jsx';

const Container = props => (
  <div className="container">
    <Description />

    <Switch>
      {/* Home Page */}
      <Route path="/home" exact component={Homepage} />
      {/* Registration Page */}
      <Route path="/register" component={Register} />
      {/* Create Mneumonic/Recovery */}
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

export default Container;
