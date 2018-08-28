import React, { Component } from 'react';

class CoinInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div classname="create-mneumonic">
        <h3>Some Popular Digital Assets</h3>
        <p>
          Here are some of the most popular digital assets on the market today!
        </p>
        <div classname="eth-desc">
          <h3>Ethereum</h3>
          <p>desc.</p>
        </div>
        <div classname="btc-desc">
          <h3>Litecoin</h3>
          <p>desc.</p>
        </div>
        <div classname="doge-desc">
          <h3>Bitcoin</h3>
          <p>desc.</p>
        </div>
        <div classname="ltc-desc">
          <h3>Dogecoin</h3>
          <p>desc.</p>
        </div>
        <button>Next</button>
      </div>
    );
  }
}

export default CoinInfo;
