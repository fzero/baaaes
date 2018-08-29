import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SampleSell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <section className="component">
        <h3>Sample Sell Transaction</h3>
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
          <div>
            <button><Link to={'/samplebuy'}>Previous</Link></button>
            <button><Link to={'/blockchainexplorer'}>Next</Link></button>
          </div>
        </form>
      </section>
    );
  }
}

export default SampleSell;
