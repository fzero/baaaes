import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Table, Row, Col, PageHeader } from 'react-bootstrap';

class Wallets extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Row className="wallets">
        <Col xs={12}>
          <PageHeader>Wallets</PageHeader>
          <Table>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Wallet-Name</th>
                <th>Address</th>
                <th>Balance</th>
                <th>History</th>
              </tr>
            </thead>
            <tbody>
              {/*{this.state.products.map((product, index) => (  ))}*/}
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
