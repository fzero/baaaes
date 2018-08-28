import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PublicKey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="component">
        <h3>Public Key</h3>
        <textarea name="mneumonic-phrase-box" />
        <label for="mneumonic-phrase-box">*please write this down</label>
        <button><Link to={'/confirmmneumonic'}>Previous</Link></button>
        <button><Link to={'/privatekey'}>Next</Link></button>
      </section>
    );
  }
}

export default PublicKey;
