import React, { Component } from 'react';
import {
  Modal,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';

class BuyBitcoinModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      dollars: 0,
      bitcoin: 0
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

  handleChange(e) {
    this.setState({ bitcoin: e.target.value });
  }

  getValidationState = () => {
    // const length = this.state.value.length;
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
    return null;
  };
  componentDidMount() {
    this.setState({ show: this.props.show });
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>Buy Button</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>Buy Bitcoin from Coinbase</Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="buyForm"
                validationState={this.getValidationState}
              >
                <ControlLabel>Amount in Bitcoin</ControlLabel>
                <FormControl
                  type="text"
                  id="amount-bitcoin"
                  value={this.state.bitcoin}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default BuyBitcoinModal;
