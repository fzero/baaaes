import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import generator from '../helpers/generator';
// const generated = generator();

class MakeWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privateKey: this.props.history.location.state.privateKey || '',
      publicKey: this.props.history.location.state.publicKey || ''
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="make-wallet">
        <form>
          <h3>Create New {/*Type of Wallet Here*/} Wallet</h3>
          <ul>
            <div>Private Key (Spend Funds)</div>
            <span name="private-key">{this.state.privateKey}</span>
            <div>Public Key (View/Recieve Funds)</div>
            <span name="public-key">{this.state.publicKey}</span>
            <div>
              <Link to="/mnemonic">Generate new addresses</Link>
              <button>Print Paper Wallet</button>
              <button>Done</button>
            </div>
          </ul>
        </form>
      </div>
    );
  }
}
export default MakeWallet;
