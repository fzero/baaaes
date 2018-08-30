import React, { Component } from 'react';
import generator from '../helpers/generator';

class MakeWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privateKey: generator.wif,
      publicKey: generator.address
    };
  }

  render() {
    return (
      <div className="make-wallet">
        <form>
          <h3>Create New {/*Type of Wallet Here*/} Wallet</h3>
          <ul>
            <div>Private Key (Spend Funds)</div>
            {this.state.privateKey}
            <div>Public Key (View/Recieve Funds)</div>
            <input value={this.state.publicKey} />
            <div>
              <button>Print Paper Wallet</button>
              <button>Done</button>
            </div>
          </ul>
        </form>
      </div>
    );
  }
}
console.log(generator);
export default MakeWallet;
