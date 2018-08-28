import React, { Component } from 'react';

class SampleSell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SampleSell">
        <form>
          <h2>Sample Sell Transaction</h2>
          <ul>
            <div>
              {/* balalnce will be dynamic */}
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
            <div>
              <input type="submit" />
            </div>
          </ul>
        </form>
      </div>
    );
  }
}

export default SampleSell;
