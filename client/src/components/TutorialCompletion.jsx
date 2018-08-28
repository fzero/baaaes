import React, { Component } from 'react';

class TutorialCompletion extends Component {
  render() {
    return(
      <section>
        <h3>You Have Completed the Tutorial!</h3>
        <p>Congratulations on completing the blockchain tutorial. You are now knowledgable enough
        to send and recieve cryptocurrency for real!</p>
        <button>Restart Tutorial</button>
        <button>Finish Tutorial</button>
      </section>
    )
  }
}

export default TutorialCompletion
