import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PrivateKey extends Component {
  render() {
    return(
      <section className="component">
        <div>
          <h3>Private Key</h3>
          <input placeholder="abvoi3uvjs838t1bf84bd73f5u48492" />
          <p>Add some notes on private key</p>
          <p>Please copy this down on paper</p>
          <button><Link to={'/publickey'}>Previous Page</Link></button>
          <button><Link to={'/createwallet'}>Next Page</Link></button>
        </div>
      </section>
    )
  }
}

export default PrivateKey