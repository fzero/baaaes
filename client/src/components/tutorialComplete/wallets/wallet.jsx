import React, { Component } from 'react';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Bitcoin',
      description: 'My Wallet',
      publickey: '',
      balance: ''
    };
  }
  componentDidMount() {}
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
