import React from 'react';
import Register from './Register.jsx';
import SampleSell from './SampleSell.jsx';
import Homepage from './homePage.jsx';
import CreateMneumonic from './CreateMneumonic';
import { Route, Switch } from 'react-router-dom';

const Container = props => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/samplesell" component={SampleSell} />
      <Route path="/createmneumonic" component={CreateMneumonic} />
      <Route path="/coininfo" component={Register} />
      <Route path="/samplebuy" component={Register} />
      <Route path="/blockchainexplorer" component={Register} />
      <Route path="/confirmmneumonic" component={Register} />
      <Route path="/createdwallet" component={Register} />
      <Route path="/privatekey" component={Register} />
      <Route path="/publickey" component={Register} />
      <Route path="/tutorialcomplete" component={Register} />
    </Switch>
  </div>
);

export default Container;
