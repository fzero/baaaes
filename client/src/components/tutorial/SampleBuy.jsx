import React, { Component } from "react";

class SampleBuy extends Component {
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
          <h3 className="buy_comp-title">Sample Buy Transaction</h3>
          <form className="buy_comp-form">
            <label>
              {/* balalnce will be dynamic */}
              FunnyMoney Balance: $10000000
            </label>
            <div>BTC Balance: 10</div>
            <div>Buy BTC for $PRICE</div>
            <div>
              Amount:
              <input type="text" />
            </div>
            <div>
              Price:
              <input type="text" />
            </div>
            <div>Total: $Total</div>
            <div>Enter Privatekey or upload encrypted keystore</div>
          </form>
          <button className="buttonForwards" onClick={this.props.pageForwards}>
            Next
            <i className="fas fa-arrow-right" />
          </button>
        </section>
      </main>
    );
  }
}

export default SampleBuy;
