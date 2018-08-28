import React, { Component } from 'react';

class PublicKey extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div classname="create-mneumonic">
        <h3>Public Key</h3>
        <textarea name="mneumonic-phrase-box">
          your mneumonic phrase will appear here
        </textarea>
        <label for="mneumonic-phrase-box">*please write this down</label>
        <button>Back</button>
        <button>Next</button>
      </div>
    );
  }
}

export default PublicKey;
