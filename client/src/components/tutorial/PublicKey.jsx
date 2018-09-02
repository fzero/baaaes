import React, { Component } from "react";
import { Link } from "react-router-dom";

class PublicKey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3 className="public_desc-title">Public Key Description</h3>
          <p className="public_desc-para">
            A public key is derived from the private key using a complex
            mathematic algorithm. A public key is used as the address where you
            will recieve transactions sent from someone else. You might think of
            it as if it was your mailbox, but instead of accepting mail you can
            receive cryptocurrency that someone has sent to you. It also has
            256-bit levels of security, and unlike a private key, a public key
            can be shared openly without any concern that someone will use it to
            access your wallet.
          </p>
          <Link
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
            to={"/privatekey"}
          >
            Previous
          </Link>
        </section>

        <section className="component">
          <h3>Public Key</h3>
          <textarea name="mnemonic-phrase-box" />
          <label for="mnemonic-phrase-box">*please write this down</label>
          <Link
            className="buttonForwards"
            onClick={this.props.pageForwards}
            to={"/coininfo"}
          >
            Next
          </Link>
        </section>
      </main>
    );
  }
}

export default PublicKey;
