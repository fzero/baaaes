import React, { Component } from "react";
import prices from "../../helpers/market.js";

class SampleSell extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.public);

    this.state = {
      //recieve testbalance and testbtcbalance from samplebuy
      testBalance: 100000,
      testBTCBalance: 0,
      totalCost: 0,
      totalCost1: 0,
      totalBTC: 0,
      BTC: {
        Name: "Bitcoin",
        Price: 7000
      }
    };
  }

  _setStats = () => {
    prices().then(result =>
      this.setState({
        BTC: {
          Price: result.BTC.CAD.PRICE
        }
      })
    );
  };

  handleBTC = ev => {
    ev.preventDefault();
    const amountOfBTC = ev.target.value;
    const totalCost = amountOfBTC * this.state.BTC.Price;
    this.setState({ totalCost: totalCost, testBTCBalance: amountOfBTC });
  };

  handleUSD = ev => {
    ev.preventDefault();
    const amountOfUSD = ev.target.value;
    const totalBTC = amountOfUSD / this.state.BTC.Price;
    this.setState({ totalBTC: totalBTC, totalCost1: amountOfUSD });
  };

  handleTransaction = ev => {
    ev.preventDefault();
    console.log(ev.target.public.value);
    if (
      ev.target.public.value === this.props.public &&
      this.state.totalCost < this.state.testBalance &&
      this.state.totalCost1 < this.state.testBalance
    ) {
      this.props.pageForwards();
    } else {
      window.alert("Transaction is not valid");
    }
  };

  componentDidMount() {
    this._setStats();
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="sell_desc">
          <h3 className="sell_desc-title">Selling Crypto Coins </h3>
          <p className="sell_desc-para">
            Many people are excited with the prospect of buying CryptoCurrency
            to add to their assets, but are a little more nervous when it comes
            to being able to sell their coins when they wish to liquidate their
            holdings.
          </p>
          <p className="sell_desc-para">
            When you do wish to sell your coins, the first step would be to go
            to a coin exchange and transfer your balance to the account. You
            must ensure that they support the type of transaction you are
            looking to complete, whether that is Bitcoin to USD or Bitcoin to a
            different currency on the market. If you are looking to make a large
            withdrawal, you may need to verify your identity to comply with
            finance regulations.
          </p>
          <p className="sell_desc-para">
            Another thing to remember is that once you have sent your coins to
            an address, there is no way to recover them, so make sure that the
            public address is the correct one.
          </p>
          <button
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
        </section>

        <section className="buy_comp">
          <h3 className="buy_comp-title">Test Transaction</h3>
          <div className="buy_comp-form">
            <div className="buy_comp-prices">
              <div className="buy_comp-USD">
                Test Balance:
                <span className="BTCprice">${this.state.testBalance}</span>
              </div>
              <div className="buy_comp-BTC">
                BTC Balance:
                <span className="BTCprice">
                  {this.state.testBTCBalance}
                  BTC
                </span>
              </div>
            </div>

            <div className="line" />

            <div className="buy_comp-BTC">
              Buy 1 BTC for
              <span className="BTCprice">${this.state.BTC.Price}</span>
            </div>

            <div className="line" />

            <div className="buy_comp-BTC">
              Amount in BTC:
              <input
                className="buy_comp-input"
                onChange={this.handleBTC}
                type="number"
              />
            </div>
            <div className="buy_comp-BTC">
              Total Cost:
              <span className="BTCprice">${this.state.totalCost}</span>
            </div>

            <div className="line" />

            <div className="buy_comp-BTC">
              Amount in USD:
              <input
                className="buy_comp-input"
                onChange={this.handleUSD}
                type="number"
              />
            </div>
            <div className="buy_comp-BTC">
              Total BTC:
              <span className="BTCprice">
                {this.state.totalBTC}
                BTC
              </span>
            </div>
          </div>

          <div className="line" />

          <form onSubmit={this.handleTransaction}>
            <div>
              <label className="label">Please Enter your Public Key:</label>
              <input className="publicKey" name="public" type="text" />
            </div>
            <button className="buttonForwards" type="submit">
              Sell
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </section>
      </main>
    );
  }
}

export default SampleSell;
