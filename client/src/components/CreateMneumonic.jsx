import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CreateMneumonic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="component">
        <h3>Mneumonic Phrase</h3>
        <textarea name="mneumonic-phrase-box" placeholder=""/>
        <label for="mneumonic-phrase-box">
          *Do not copy, please write it down
        </label>
        <button><Link to={'/register'}>Previous</Link></button>
        <button><Link to={'/confirmmneumonic'}>Next</Link></button>
      </section>
    );
  }
}

export default CreateMneumonic;
