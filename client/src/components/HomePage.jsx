import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Homepage extends Component {
  render() {
    return (
      <section className="noDescription">
        <h1>Wallet Cryptorial</h1>
        <p>
          Wallet Cryptorial is a quick and easy tool to help anyone with little to no
          knowledge about the cryptocurrency world learn what the blockchain is and 
          how it works, how to create a crypto wallet, and how to buy and sell 
          cryptocurrency. This step by step tutorial will walk you through the 
          registration of an account, what a mnemonic phrase, public key and private 
          key are, and finally the creation of your very own crypto-wallet. Once you 
          have created your wallet, you will continue forward with a few test 
          transactions, buying a fake Bitcoin and then selling it back using our own 
          test coins. By the end of this walkthrough, you will have all the knowledge
          needed to create a real crypto-wallet and begin your journey into the world
          of cryptocurrency.
        </p>
        <button>Existing User</button>
        <button><Link to={'/register'}>Get Started!</Link></button>
      </section>
    );
  }
}

export default Homepage;
