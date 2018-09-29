import React, { Component } from 'react';
import BitBalance from '../../../helpers/balance';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Bitcoin',
      description: 'My Wallet',
      publickey: this.props.publickey, //3KBKa6uJfFVAJnQ61B4EQDdE6Jscx326yF for testing
      received: 0,
      spent: 0,
      numOfTxs: 0,
      balance: 0,
      txs: []
    };
  }
  _getTransactions = () => {
    BitBalance(this.props.publickey).then(result => {
      console.log(result);
      this.setState({
        balance: result.balance,
        numOfTxs: result.txApperances,
        txs: result.transactions,
        received: result.totalReceived,
        spent: result.totalSent
      });
    });
  };

  componentDidMount() {
    this._getTransactions();
  }
  render() {
    return (
      <tr key={this.props.index}>
        <td>{this.state.name}</td>
        <td>{this.state.description}</td>
        <td>{this.state.publickey}</td>
        <td>{this.state.received}</td>
        <td>{this.state.spent}</td>
        <td>{this.state.numOfTxs}</td>
        <td>{this.state.balance}</td>
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
