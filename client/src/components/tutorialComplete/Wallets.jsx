import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Row, Col, PageHeader } from 'react-bootstrap';
import Wallet from './wallets/wallet';

class Wallets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publicKeys: {}
    };
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
              <Wallet />
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default Wallets;
