import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Row, Col, PageHeader } from 'react-bootstrap';

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
              {/*{this.state.publicKeys.map((key, index) => (  ))}*/}
              <tr>
                <td>Bitcoin</td>
                <td>My Wallet</td>
                <td>0x12309sfj0asd908098</td>
                <td>20.12313</td>
                <td>See Transactions</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default Wallets;
