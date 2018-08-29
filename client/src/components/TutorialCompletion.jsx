import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class TutorialCompletion extends Component {
  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            error dolor consequuntur, natus eum itaque harum fugit perspiciatis
            nobis id aperiam sed architecto et esse perferendis nisi dolorem
            voluptas repellat.Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Beatae, error dolor consequuntur, natus eum itaque harum fugit
            perspiciatis nobis id aperiam sed architecto et esse perferendis nisi
            dolorem voluptas repellat.
          </p>
        </section>

        <section className="component">
          <h3>You Have Completed the Tutorial!</h3>
          <p>
            Congratulations on completing the blockchain tutorial. You now know enough 
            to send and recieve cryptocurrency for real!
          </p>
          <button><Link to={'/'}>Restart Tutorial</Link></button>
          <button>Finish Tutorial</button>
        </section>
      </main>
    );
  }
}

export default TutorialCompletion
