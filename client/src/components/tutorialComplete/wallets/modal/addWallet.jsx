import React, { Fragment } from 'react';
import { Form, FormControl, Modal, ModalBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddWallet = () => {
  return (
    <Fragment>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Form>
          <FormControl
            id="add-wallet-from-publickey"
            type="text"
            label="Enter Public Key"
            placeholder="3kBka6y......................."
          />
        </Form>
      </ModalBody>
      <Link to="/mnemonic" className="btn btn-primary" />
    </Fragment>
  );
};

export default AddWallet;
