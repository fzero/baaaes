import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CreateMneumonic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <h3>Mnemonic Phrase</h3>
          <textarea name="mneumonic-phrase-box" placeholder=""/>
          <label for="mneumonic-phrase-box">
            *Do not copy, please write it down
          </label>
          <button><Link to={'/register'}>Previous</Link></button>
          <button><Link to={'/confirmmneumonic'}>Next</Link></button>
        </section>
      </main>
    );
  }
}

export default CreateMneumonic;
