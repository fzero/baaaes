import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PrivateKey extends Component {
  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3>Private Key Description</h3>
          <p>
            A Private Key, or a private address is a 256-bit number that is
            generated from the mnemonic phrase. The private key is similar to
            the passcode used to access your bank account, except it is a little
            more secure than a 4 digit pin. The key is what permits you to send
            irreversible transactions to anyone, anywhere. This private key is
            crucial to the ownership of your crypto-wallet, and everything it
            contains. If anyone discovers your private key, they would have the
            ability to access your wallet and authorize the transfer of your
            coins.
          </p>
          <h4>Can the private key be cracked?</h4>
          <p>
            The Bitcoin private key is an integer between 1 and 10^77, which
            makes it essentially infinite. The key is so secure that if a super
            computer could process 1 trillion keys per second, it would still
            take 1 million times the age of the universe to count them all. This
            process would consume all the energy that the sun can produce for 32
            years. So yes, the private key is secure.
          </p>
        </section>

        <section className="component">
          <div>
            <h3>Private Key</h3>
            <input placeholder="abvoi3uvjs838t1bf84bd73f5u48492" />
            <p>Add some notes on private key</p>
            <p>Please copy this down on paper</p>
            <Link to={'/publickey'}>Previous</Link>
            <Link to={'/testwallet'}>Next</Link>
          </div>
        </section>
      </main>
    );
  }
}

export default PrivateKey;
