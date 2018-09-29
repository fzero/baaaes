import React, { Component } from "react";

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
          <p className="public_desc-para">
            This key is used as the address where coins would be sent to. If you
            were in the process of selling coins to someone else, you would
            input their public address. If someone was sending you coins, they
            would need you public address, but be very careful not to send them
            your private address, or you will most likely lose all your assets.
          </p>
          <button
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
        </section>

        <section className="public_comp">
          <h3 className="public_comp-title">Public Key</h3>
          <p className="public_comp-key">{this.props.public}</p>
          <p className="public_comp-desc">
            Please save a copy of this key, preferably on your computer as well
            as a hard copy.
          </p>
          <div className="line" />
          <p className="public_comp-desc">
            This key is used as the address where coins will be
          </p>
          <button className="buttonForwards" onClick={this.props.pageForwards}>
            Next
            <i className="fas fa-arrow-right" />
          </button>
        </section>
      </main>
    );
  }
}

export default PublicKey;
