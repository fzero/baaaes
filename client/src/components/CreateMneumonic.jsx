import React, { Component } from 'react';

class CreateMneumonic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div classname="create-mneumonic">
        <h3>Mneumonic Phrase</h3>
        <textarea name="mneumonic-phrase-box">
          your mneumonic phrase will appear here
        </textarea>
        <label for="mneumonic-phrase-box">
          *Do not copy, please write it down
        </label>
        <button>Next -></button>
      </div>
    );
  }
}

export default CreateMneumonic;
