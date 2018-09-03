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
        <section className="public_description">
          <h3 className="public_desc-title">Public Key Description</h3>
          <p className="public_desc-para">
            A public key is derived from the private key using a complex
            mathematic algorithm. This is used as the address where you will
            recieve transactions sent from someone else. You might think of it
            as if it was your mailbox, but instead of accepting mail you can
            receive cryptocurrency that someone has sent to you. Like the
            private key that you just received, your public key has 256-bit
            levels of security, and unlike a private key, a public key can be
            shared openly without any concern that someone will use it to access
            your wallet.
          </p>
          <Link
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
            to={"/privatekey"}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </Link>
        </section>

        <section className="public_comp">
          <h3 className="public_comp-title">Public Key</h3>
          <input className="public_comp-key" />
          <p className="public_comp-desc">
            Please save a copy of this key, preferably on your computer as well
            as a hard copy.
          </p>
          <Link
            className="buttonForwards"
            onClick={this.props.pageForwards}
            to={"/coininfo"}
          >
            Next
            <i className="fas fa-arrow-right" />
          </Link>
        </section>
      </main>
    );
  }
}

export default PublicKey;
