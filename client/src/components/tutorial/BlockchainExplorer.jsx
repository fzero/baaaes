import React, { Component } from "react";

class BlockchainExplorer extends Component {
  render() {
    return (
      <section className="componentContainer">
        <div className="blockchain_desc">
          <h3 className="blockchain_desc-title">What is the Blockchain?</h3>
          <p className="blockchain_desc-para">
            The blockchain is the technology which records the transactions of
            everything that happens on that specific chain. If you made a
            transaction to buy 3 BTC, the BTC blockchain would record the
            transaction in a block, and it becomes the next block in that chain,
            going all the way back to when the first BTC transaction was made.
            Each block allows for the information to be distributed to everyone,
            but it cannot be copied or changed.
          </p>
          <p className="blockchain_desc-para">
            To give you an example, imagine an excel speadshreet that is
            duplicated across thousands of computers. The blockchain network is
            regularly updates this spreadsheet, so everyone can view changes
            made to this spreadsheet
          </p>
          <p className="blockchain_desc-para">
            The chain began with its Genesis Block, which could be referred to
            as Block #0. Every block that follows Block #0 contains the same
            types of data as the original, but with different information within
            each one.
          </p>
          <button
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
        </div>

        <div className="blockchain_comp">
          <h3>Blockchain Transactions</h3>
          <div>
            <h5>Bought</h5>
            <div>
              <p>Cost:</p>
              <p>Spent:</p>
              <p>Sender Address</p>
              <p>Recieving Address</p>
            </div>
          </div>

          <div>
            <h5>Sold</h5>
            <div>
              <p>Cost:</p>
              <p>Spent:</p>
              <p>Sender Address</p>
              <p>Recieving Address</p>
            </div>
          </div>
          <button className="buttonForwards" onClick={this.props.pageForwards}>
            Next
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </section>
    );
  }
}

export default BlockchainExplorer;
