import React, { Component } from 'react';
import BitBalance from '../../../helpers/balance';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Bitcoin',
      description: 'My Wallet',
      publickey: '3KBKa6uJfFVAJnQ61B4EQDdE6Jscx326yF', //3KBKa6uJfFVAJnQ61B4EQDdE6Jscx326yF for testing
      balance: ''
    };
  }
  _getBalance = () => {
    BitBalance().then(result => console.log(result));
  };

  componentDidMount() {
    // set state to reflect publickey
    this._getBalance();
  }
  render() {
    return (
      <tr>
        <td>{this.state.name}</td>
        <td>{this.state.description}</td>
        <td>{this.state.publickey}</td>
        <td>{this.state.balance}</td>
        <td>See Transactions</td>
      </tr>
    );
  }
}
export default Wallet;
/*
<td>Bitcoin</td>
<td>My Wallet</td>
<td>0x12309sfj0asd908098</td>
<td>20.12313</td>
<td>See Transactions</td>
*/
