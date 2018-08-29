import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BlockchainExplorer extends Component {
  render() {
    return (
      <section className="component">
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
        <button><Link to={'/samplesell'}>Previous</Link></button>
        <button><Link to={'/tutorialcomplete'}>Next</Link></button>
      </section>
    );
  }
}

export default BlockchainExplorer
