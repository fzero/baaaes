import React, { Component } from "react";

class SampleSell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            finance regulations. Another thing to remember is that once you have
            sent your coins to an address, there is no way to recover them, so
            make sure that the public address is the correct one.
          </p>
          <button
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
        </section>

        <section className="sell_comp">
          <h3 className="sell_comp-title">Sample Sell Transaction</h3>
          <form>
            <div>
              {/* balance will be dynamic */}
              FunnyMoney Balance: $10000000
            </div>
            <div>BTC Balance: 10</div>
            <div>Sell BTC for $PRICE</div>
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

export default SampleSell;
