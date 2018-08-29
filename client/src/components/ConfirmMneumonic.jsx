import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConfirmMneumonic extends Component {
  render() {
    return (
      <section className="component">
        <div>
          <h3>Enter Mneumonic Phrase</h3>
          <textarea placeholder="Please re-enter your Mneumonic Phrase here..." />
          <button>
            <Link to={'/createmneumonic'}>Previous</Link>
          </button>
          <button>
            <Link to={'/publickey'}>Next</Link>
          </button>
        </div>
      </section>
    );
  }
}

export default ConfirmMneumonic;
