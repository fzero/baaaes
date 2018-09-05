import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  Table,
  Row,
  Col,
  PageHeader,
  Button,
  Modal,
  FormControl,
  Form
} from 'react-bootstrap';
import Wallet from './wallets/wallet';
import isValid from '../../helpers/isValid';
import Resource from '../../models/resource';
const Key = Resource('keys');

class Wallets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publicKeys: [],
      show: false,
      key: ''
    };
  }
  // MODAL FUNCTIONS
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  // END OF MODAL FUNCTIONS
  // GET PUBLIC ADRESSES FROM DB
  getWallets = () => {
    Key.find(localStorage.getItem('userid'))
      .then(result => {
        console.log(result);
        this.setState({
          publicKeys: result.result
        });
      })
      .catch(e => alert(e));
  };
  // FORM CONTROL FUNCTIONS
  enterKey = ev => {
    this.setState({ key: ev.target.value });
  };
  addKey = ev => {
    ev.preventDefault();
    isValid(this.state.key).then(result => {
      console.log(result);
      if (result === false) {
        return alert('key is invalid');
      }
      const data = {
        publicKey: this.state.key,
        userId: localStorage.getItem('userid')
      };

      Key.create(data)
        .then(() => {
          alert('You have successfully added your public key');
          this.handleClose();
          this.getWallets();
        })
        .catch(e => alert(e));
    });
  };

  // LOAD ON MOUNT
  componentDidMount() {
    this.getWallets();
  }

  render() {
    return (
      <Row className="wallets">
        <Col xs={12}>
          <PageHeader>Wallets</PageHeader>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.handleShow}
            className="new-wallet"
          >
            Add Wallet
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.addKey}>
                Enter Public Key or Create New Wallet
                <FormControl
                  id="add-wallet-from-publickey"
                  onChange={this.enterKey}
                  type="text"
                  label="From Public Key"
                  placeholder="Public Key Goes Here"
                  value={this.state.key}
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={console.log(this)}>Create New Wallet</Button>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          <Table>
            <thead>
              <tr>
                <td>Coin</td>
                <td>Wallet-Name</td>
                <td>Address</td>
                <td>Total Recieved</td>
                <td>Total Spent</td>
                <td>Total # of Transactions</td>
                <td>Balance</td>
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
