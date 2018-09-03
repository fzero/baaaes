import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, PageHeader, Button } from 'react-bootstrap';
import Resource from '../../models/resource.js';
const Key = Resource('keys');

class MakeWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privateKey: this.props.location.state.privateKey,
      publicKey: this.props.location.state.publicKey
    };
  }

  // Event handler for user info
  _handleSubmit = ev => {
    ev.preventDefault();
    const publicKey = this.state.publicKey;
    // props.user =

    console.log(publicKey);

    Key.create(publicKey)
      .then(() => alert('success'))
      .catch(e => alert(e));
  };
  _addNewWallet() {}
  componentDidMount() {}
  render() {
    return (
      <div className="make-wallet">
        <Col xs={12}>
          <PageHeader>Create New Wallet</PageHeader>
          <Form>
            <ul>
              <div>Private Key (Spend Funds)</div>
              <span name="private-key">{this.state.privateKey}</span>
              <div>Public Key (View/Recieve Funds)</div>
              <span name="public-key">{this.state.publicKey}</span>
              <div>
                <Link to="/mnemonic">Generate new addresses</Link>
                <Button>Print Paper Wallet</Button>
                <Button onClick={this._handleSubmit} className="new-wallet">
                  New Wallet
                </Button>
              </div>
            </ul>
          </Form>
        </Col>
      </div>
    );
  }
}
export default MakeWallet;
