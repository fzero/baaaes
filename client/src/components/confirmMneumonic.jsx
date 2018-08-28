import React, { Component } from 'react';

class ConfirmMneumonic extends Component {
  render() {
    return(
      <section>
        <div>
          <h3>Enter Mneumonic Phrase</h3>
          <textarea placeholder="Enter your Mneumonic Phrase here..." />
          <button>Return to last page</button>
          <button>Next part</button>
        </div>
      </section>
    )
  }
}

export default ConfirmMneumonic
