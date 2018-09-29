import React, { Component } from 'react';
import { Modal, Button, FormControl, Form } from 'react-bootstrap';
import isValid from '../../../helpers/isValid';
import Resource from '../../../models/resource';
const Key = Resource('keys');

class AddWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          this.props.getWallets();
        })
        .catch(e => alert(e));
    });
  };
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default AddWallet;
