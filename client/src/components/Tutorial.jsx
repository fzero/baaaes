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
      page: 9,
      mnemonic: generated.mnemonic,
      publ: generated.address,
      priv: generated.wif,
      sampleUSDBalance: 100000,
      sampleBTCBalance: 0
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

  myCallback = dataFromSampleBuy => {
    this.setState({
      sampleUSDBalance: this.state.sampleUSDBalance - dataFromSampleBuy[0],
      sampleBTCBalance: dataFromSampleBuy[1]
    });
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
            private={this.state.priv}
          />
        );
        break;
      case 4:
        page = (
          <PublicKey
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
            public={this.state.publ}
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
            sendData={this.myCallback}
            private={this.state.priv}
          />
        );
        break;
      case 7:
        page = (
          <SampleSell
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
            BTCbalance={this.state.sampleBTCBalance}
            USDbalance={this.state.sampleUSDBalance}
            public={this.state.publ}
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
        page = <TutorialFinish pageReset={this.pageReset} />;
        break;
      default:
        page = (
          <TutorialStart
            pageForwards={this.pageForwards}
            pageBackwards={this.pageBackwards}
          />
        );
        break;
    }
    return (
      <main>
        <div className="container">
          <div>{page}</div>
        </div>
        <section className="footer">
          <div className="progressBar">
            <DottedProgress
              numSteps={9}
              activeStep={this.state.page}
              activeDotColor="#0A971F"
              dotStyles={{
                background: "white", // should be changed
                border: "1px solid #000",
                borderRadius: "12.5px",
                height: "25px",
                width: "25px"
              }}
              lineStyles={{
                background: "#000",
                height: "2px",
                margin: "auto auto",
                width: "70%"
              }}
            />
          </div>
        </section>
      </main>
    );
  }
}
export default Tutorial;
