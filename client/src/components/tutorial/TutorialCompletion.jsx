import React, { Component } from "react";
import { Link } from "react-router-dom";

class TutorialCompletion extends Component {
  // Send info to User table to update tutorialComplete
  handleCompletion = ev => {
    ev.preventDefault();
    // User.update()
  };

  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            error dolor consequuntur, natus eum itaque harum fugit perspiciatis
            nobis id aperiam sed architecto et esse perferendis nisi dolorem
            voluptas repellat.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Beatae, error dolor consequuntur, natus eum itaque
            harum fugit perspiciatis nobis id aperiam sed architecto et esse
            perferendis nisi dolorem voluptas repellat.
          </p>
        </section>

        <section className="component">
          <h3>You Have Completed the Tutorial!</h3>
          <p>
            Congratulations on completing the blockchain tutorial. You now know
            enough to send and recieve cryptocurrency for real!
          </p>
          <Link
            className="buttonForwards"
            onClick={this.props.pageReset}
            to={"/home"}
          >
            Restart Tutorial
          </Link>
          <Link
            className="buttonForwards"
            onClick={this.handleCompletion}
            to={"/wallets"}
          >
            Restart Tutorial
          </Link>
        </section>
      </main>
    );
  }
}

export default TutorialCompletion;
