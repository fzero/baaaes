import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class TutorialCompletion extends Component {
  render() {
    return (
      <section className="component">
        <h3>You Have Completed the Tutorial!</h3>
        <p>
          Congratulations on completing the blockchain tutorial. You are now
          knowledgable enough to send and recieve cryptocurrency for real!
        </p>
        <button><Link to={'/'}>Restart Tutorial</Link></button>
        <button>Finish Tutorial</button>
      </section>
    );
  }
}

export default TutorialCompletion
