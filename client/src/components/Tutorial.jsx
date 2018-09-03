import React, { Component } from "react";
import { DottedProgress } from "react-progress-ui";
// Components
import TutorialStart from "./tutorial/TutorialStart";
import CreateMnemonic from "./tutorial/CreateMnemonic";
import PrivateKey from "./tutorial/PrivateKey";
import PublicKey from "./tutorial/PublicKey";
import CoinInfo from "./tutorial/CoinInfo";
import SampleBuy from "./tutorial/SampleBuy";
import SampleSell from "./tutorial/SampleSell";
import BlockchainExplorer from "./tutorial/BlockchainExplorer";
import TutorialFinish from "./tutorial/TutorialFinish";
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
    let page;
    switch (this.state.page) {
      case 1:
        page = (
          <TutorialStart
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
      case 2:
        page = (
          <CreateMnemonic
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
            mnemonic={this.state.mnemonic}
          />
        );
        break;
      case 3:
        page = (
          <PrivateKey
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
            mnemonic={this.state.priv}
          />
        );
        break;
      case 4:
        page = (
          <PublicKey
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
            mnemonic={this.state.publ}
          />
        );
        break;
      case 5:
        page = (
          <CoinInfo
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
      case 6:
        page = (
          <SampleBuy
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
      case 7:
        page = (
          <SampleSell
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
      case 8:
        page = (
          <BlockchainExplorer
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
      case 9:
        page = (
          <TutorialFinish
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
      case 10:
        page = (
          <CreateMnemonic
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
      default:
        page = <TutorialStart pageReset={this.pageReset} />;
        break;
    }
    return (
      <div className="container">
        <div className="progressBar">
          <DottedProgress
            numSteps={9}
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
        <div>{page}</div>
      </div>
    );
  }
}
export default Tutorial;
