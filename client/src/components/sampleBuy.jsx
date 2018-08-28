import React, { Component } from 'react';

class SampleBuy extends Component {
  render() {
    return(
      <div className="SampleBuy">
        <form>
          <h3>Sample Buy Transaction</h3>
          <ul>
            <div>
              {/* balalnce will be dynamic */}
              FunnyMoney Balance: $10000000
            </div>
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
            <div>
              <input type="submit" />
            </div>
          </ul>
        </form>
      </div>
    )
  }
}

export default SampleBuy
