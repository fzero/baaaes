import React, { Component } from "react";
import { DottedProgress } from "react-progress-ui";
import { Route, Switch } from "react-router-dom";
// Components
import Homepage from "./tutorial/HomePage";
import Register from "./tutorial/Register";
import CreateMnemonic from "./tutorial/CreateMnemonic";
import PrivateKey from "./tutorial/PrivateKey";
import PublicKey from "./tutorial/PublicKey";
import CoinInfo from "./tutorial/CoinInfo";
import SampleBuy from "./tutorial/SampleBuy";
import SampleSell from "./tutorial/SampleSell";
import BlockchainExplorer from "./tutorial/BlockchainExplorer";
import TutorialCompletion from "./tutorial/TutorialCompletion";
// Generate Random Bitcoin Mnemonic -> Private Key (WIF) -> Public Key
// This will be a "test wallet" but the keys will correspond with real
// bitcoin addresses
import generator from "../helpers/generator";
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
        <div className="progressBar">
          <DottedProgress
            numSteps={10}
            activeStep={this.state.page}
            activeDotColor="#0A971F"
            dotStyles={{
              background: "#092956", // should be changed
              border: "1px solid #000",
              borderRadius: "12.5px",
              height: "25px",
              width: "25px"
            }}
            lineStyles={{
              background: "#000",
              height: "2px",
              margin: "40px auto",
              width: "70%"
            }}
            styles="border-bottom: 4px solid black"
          />
        </div>
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
          {/* Create Mnemonic */}
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
