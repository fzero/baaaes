import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CoinInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3>Crypto Coins</h3>
          <p>
            Before you start practicing with the transactions, here is some 
            information on the more popular coins on the market. There are thousands 
            of different coins out there, but most of them are worth mere cents, 
            while some of these more popular ones, like Bitcoin, reached $17,900 USD
            in December of 2017.
          </p>
        </section>

        <section className="component">
          <h3>Some Popular Digital Assets</h3>
          <p>
            Here are some of the most popular digital assets on the market today!
          </p>
          <div classname="eth-desc">
            <h3>Ethereum</h3>
            <p>Current Price: </p>
            <p>desc.</p>
          </div>
          <div classname="btc-desc">
            <h3>Litecoin</h3>
            <p>Current Price: </p>
            <p>desc.</p>
          </div>
          <div classname="doge-desc">
            <h3>Bitcoin</h3>
            <p>Current Price: </p>
            <p>desc.</p>
          </div>
          <div classname="ltc-desc">
            <h3>Dogecoin</h3>
            <p>Current Price: </p>
            <p>desc.</p>
          </div>
          <button><Link to={'/createwallet'}>Previous</Link></button>
          <button><Link to={'/samplebuy'}>Next</Link></button>
        </section>
      </main>
    );
  }
}

export default CoinInfo;
