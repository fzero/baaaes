import React, { Component } from "react";
import { Link } from "react-router-dom";

class PrivateKey extends Component {
  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3 className="private_desc-title">Private Key Description</h3>
          <p className="private_desc-para">
            A Private Key, or a private address is a 256-bit security level
            number that is generated from the mnemonic phrase. The private key
            is similar to the passcode used to access your bank account, except
            it is a little more secure than a 4 digit pin. The key is what
            permits you to send irreversible transactions to anyone, anywhere.
            This private key is crucial to the ownership of your crypto-wallet,
            and everything it contains.
          </p>
          <p className="private_desc-para">
            <span className="warning">Warning:</span>
            If anyone discovers your private key, they would have the ability to
            access your wallet and authorize the transfer of your coins. Please
            write down this key and keep it in a secure location, preferably
            keeping both a hard and soft copy.
          </p>
          <p className="private_desc-para padding">
            The Bitcoin private key is an integer between 1 and 10^77, which
            makes it essentially infinite. If a super computer could process 1
            trillion keys per second, it would still take 1 million times the
            age of the universe to count them all. Also this process is so
            expensive that it would consume all the energy that the sun can
            produce for 32 years.
          </p>
          <Link
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
            to={"/createmnemonic"}
          >
            Previous
          </Link>
        </section>

        <section className="component">
          <div>
            <h3>Private Key</h3>
            <input placeholder="abvoi3uvjs838t1bf84bd73f5u48492" />
            <p>Add some notes on private key</p>
            <p>Please copy this down on paper</p>
            <Link
              className="buttonForwards"
              onClick={this.props.pageForwards}
              to={"/publickey"}
            >
              Next
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

export default PrivateKey;
