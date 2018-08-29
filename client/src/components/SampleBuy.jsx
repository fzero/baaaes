import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SampleBuy extends Component {
  render() {
    return(
      <section className="component">
        <h3>Sample Buy Transaction</h3>
        <form>
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
            <button><Link to={'/coininfo'}>Previous</Link></button>
            <button><Link to={'/samplesell'}>Next</Link></button>
          </div>
        </form>
      </section>
    )
  }
}

export default SampleBuy
