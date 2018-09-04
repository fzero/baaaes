import React, { Component } from "react";
import prices from "../../helpers/market.js";

class SampleBuy extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.private);

    this.state = {
      //send testbalance and testbtcbalance to samplesell
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
    console.log(ev.target.private.value);
    if (
      ev.target.private.value === this.props.private &&
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
        <section className="buy_desc">
          <h3 className="buy_desc-title">Buying Crypto Coins</h3>
          <p className="buy_desc-para">
            Before you walk through the process of buying a Bitcoin, it must be
            stressed that you should never invest more than you are willing to
            lose. Cryptocurrencies can be extremely volatile and the price is
            just as likely to go down as it is to go up.
          </p>
          <p className="buy_desc-para">
            Crypto coins can be bought using various methods, ranging from cash
            to credit to debit to wire transfers or even exchanging them for
            other cryptocurrencies.
          </p>
          <p className="buy_desc-para">
            CryptoCoin Exchanges are options that allow for the use of debit,
            credit and possibly, depending on the exchange, paypal transfers.
            Most Coin exchanges will charge fees for using the Bitcoin network
            that will add on to you total when youre ready to complete the
            transaction.
          </p>
          <p className="buy_desc-para">
            Cash is another option to purchase Cryptocurrency with, and some
            platforms will help you find individuals in your area who are
            willing to meet in person to complete the transaction. Some
            exchanges will direct you to a bank to make a direct cash deposit,
            and then send you Bitcoin just a few hours later.
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
                <span className="BTCprice">$100000</span>
              </div>
              <div className="buy_comp-BTC">
                BTC Balance:
                <span className="BTCprice">0 BTC</span>
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

            <div className="line" />
          </div>

          <form onSubmit={this.handleTransaction}>
            <div>
              <label>Please Enter your Private Key:</label>
              <input name="private" type="text" />
            </div>
            <button className="buttonForwards" type="submit">
              Purchase
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </section>
      </main>
    );
  }
}

// onClick={this.props.pageForwards}

export default SampleBuy;
