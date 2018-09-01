import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PublicKey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3>Public Key Description</h3>
          <p>
            A public key is derived from the private key, which will be
            discussed in the next step, using a complex mathematic algorithm, is
            used as the address where you will recieve transactions sent from
            someone else. It is a 256-bit number, and unlike a private key, a
            public key can be shared openly without any worry that someone will
            use it to access your wallet.
          </p>
        </section>

        <section className="component">
          <h3>Public Key</h3>
          <textarea name="mnemonic-phrase-box" />
          <label for="mnemonic-phrase-box">*please write this down</label>
          <Link to={'/confirmmnemonic'}>Previous</Link>
          <Link to={'/privatekey'}>Next</Link>
        </section>
      </main>
    );
  }
}

export default PublicKey;
