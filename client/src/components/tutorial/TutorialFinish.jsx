import React, { Component } from "react";
import Resource from "../../models/resource.js";
const User = Resource("users");

class TutorialCompletion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorialcomplete: true
    };
  }
  // Send info to User table to update tutorialComplete---------
  handleCompletion = ev => {
    ev.preventDefault();
    console.log(localStorage.userid);
    User.update(localStorage.userid, this.state)
      .then(() => this.props.history.push("/"))
      .catch(e => alert(e));
  };

  render() {
    return (
      <section className="componentContainer">
        <div className="tutorial_comp">
          <h3 className="tutorial_comp-title">
            You Have Completed the Tutorial!
          </h3>
          <p className="tutorial_comp-para">
            Congratulations on completing the blockchain tutorial. You now know
            enough to send and recieve cryptocurrency for real! From this page,
            you may either restart the tutorial again, if you wish to take a
            look through it again, or complete the tutorial, and move on to
            creating a real cryptocurrency wallet.
          </p>
          <button className="buttonBackwards" onClick={this.props.pageReset}>
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
