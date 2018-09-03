import React, { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <section className="componentContainer">
        <div className="contents">
          <h2 className="contents_title">Table of Contents</h2>
          <ul className="contents_list">
            <li>
              <span className="chapter">Chapter 1:</span> The Cryptorial
            </li>
            <li>
              <span className="chapter">Chapter 2:</span> Register
            </li>
            <li>
              <span className="chapter">Chapter 3:</span> Mnemonic Phrase
            </li>
            <li>
              <span className="chapter">Chapter 4:</span> Private Key
            </li>
            <li>
              <span className="chapter">Chapter 5:</span> Public Key
            </li>
            <li>
              <span className="chapter">Chapter 6:</span> Coin Information
            </li>
            <li>
              <span className="chapter">Chapter 7:</span> Sample Buying
              Transaction
            </li>
            <li>
              <span className="chapter">Chapter 8:</span> Sample Selling
              Transaction
            </li>
            <li>
              <span className="chapter">Chapter 9:</span> Explore the Blockchain
            </li>
            <li>
              <span className="chapter">Chapter 10:</span> Complete Tutorial
            </li>
          </ul>
        </div>

        <div className="noDescription">
          <h1 className="title">The Cryptorial</h1>
          <p className="desc_para">
            Wallet Cryptorial is a quick and easy tool to help anyone with
            little to no knowledge about the cryptocurrency world learn what the
            blockchain is and how it works, how to create a crypto wallet, and
            how to buy and sell cryptocurrency. This step by step tutorial will
            walk you through the registration of an account, what a mnemonic
            phrase, public key and private key are, and finally the creation of
            your very own crypto-wallet. Once you have created your wallet, you
            will continue forward with a few test transactions, buying a fake
            Bitcoin and then selling it back using our own test coins. By the
            end of this walkthrough, you will have all the knowledge needed to
            create a real crypto-wallet and begin your journey into the world of
            cryptocurrency.
          </p>
          <button className="buttonBackwards" to={"/login"}>
            <i className="fas fa-pen" />
            Existing User?
          </button>
          <button className="buttonForwards" onClick={this.props.pageForwards}>
            Get Started!
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </section>
    );
  }
}

export default Homepage;
