import React, { Component } from "react";

class TutorialCompletion extends Component {
  // Send info to User table to update tutorialComplete
  handleCompletion = ev => {
    ev.preventDefault();
    // User.update()
  };

  render() {
    return (
      <section className="componentContainer">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            error dolor consequuntur, natus eum itaque harum fugit perspiciatis
            nobis id aperiam sed architecto et esse perferendis nisi dolorem
            voluptas repellat.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Beatae, error dolor consequuntur, natus eum itaque
            harum fugit perspiciatis nobis id aperiam sed architecto et esse
            perferendis nisi dolorem voluptas repellat.
          </p>
        </div>

        <div className="component">
          <h3>You Have Completed the Tutorial!</h3>
          <p>
            Congratulations on completing the blockchain tutorial. You now know
            enough to send and recieve cryptocurrency for real!
          </p>
          <button className="buttonForwards" onClick={this.props.pageReset}>
            <i className="fas fa-redo-alt" />
            Restart Tutorial
          </button>
          <button className="buttonForwards" onClick={this.handleCompletion}>
            Complete Tutorial
            <i className="fas fa-home" />
          </button>
        </div>
      </section>
    );
  }
}

export default TutorialCompletion;
