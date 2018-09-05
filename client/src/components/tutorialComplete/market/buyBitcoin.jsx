import React, { Component } from 'react';
import {
  Modal,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';
// import isValid from '../../../helpers/isValid';
import Buy from '../../../helpers/buy';
import Resource from '../../../models/resource';
const Key = Resource('keys');

class BuyBitcoinModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      dollars: 0,
      receipt: '',
      publicKeys: []
    };
  }
  // GET PUBLIC ADRESSES FROM DB
  getWallets = () => {
    Key.find(localStorage.getItem('userid'))
      .then(result => {
        this.setState({
          publicKeys: result.result
        });
      })
      .catch(e => alert(e));
  };
  // MODAL FUNCTIONS
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  // END OF MODAL FUNCTIONS

  handleBitChange(e) {
    this.setState({ bitcoin: e.target.value });
  }
  handleDolChange(e) {
    this.setState({ dollars: e.target.value });
  }

  getValidationState = () => {
    // const length = this.state.value.length;
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
    return null;
  };
  componentDidMount() {
    this.getWallets();
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>Buy Button</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Buy Bitcoin from Coinbase</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Amount in USD</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Your Public Key</ControlLabel>
                <FormControl componentClass="select" placeholer="select">
                  <option value="select">Select a Public Key</option>
                  {this.state.publicKeys.map((address, index) => (
                    <option value={address.publickey}>
                      {address.publickey}
                    </option>
                  ))}
                </FormControl>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={Buy('127jKPU1kuYpnLyhzPjNPmPP9kyMeeEWyA', 10).then(
                result => console.log(result)
              )}
            >
              {/*hard coded*/}
              Buy
            </Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default BuyBitcoinModal;
