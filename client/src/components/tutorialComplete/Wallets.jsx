import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Row, Col, PageHeader } from 'react-bootstrap';
import Wallet from './wallets/wallet';
import Resource from '../../models/resource';
const Key = Resource('keys');

class Wallets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publicKeys: []
    };
  }
  getWallets = () => {
    Key.find(localStorage.getItem('userid'))
      .then(result => {
        console.log(result);
        this.setState({
          publicKeys: [...this.state.publicKeys, ...result.result]
        });
      })
      .catch(e => alert(e));
  };
  componentDidMount() {
    this.getWallets();
  }
  render() {
    return (
      <Row className="wallets">
        <Col xs={12}>
          <PageHeader>Wallets</PageHeader>
          <Link to="/mnemonic" className="new-wallet btn btn-primary btn-sm">
            Create New Wallet +
          </Link>
          <Table>
            <thead>
              <tr>
                <td>Coin</td>
                <td>Wallet-Name</td>
                <td>Address</td>
                <td>Balance</td>
                <td>History</td>
              </tr>
            </thead>
            <tbody>
              {this.state.publicKeys.map((address, index) => (
                <Wallet publickey={address.publickey} index={index} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default Wallets;
