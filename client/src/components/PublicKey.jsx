import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PublicKey extends Component {
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
            voluptas repellat.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Beatae, error dolor consequuntur, natus eum itaque
            harum fugit perspiciatis nobis id aperiam sed architecto et esse
            perferendis nisi dolorem voluptas repellat.
          </p>
        </section>

        <section className="component">
          <h3>Public Key</h3>
          <textarea name="mnemonic-phrase-box" />
          <label for="mnemonic-phrase-box">*please write this down</label>
          <button>
            <Link to={'/confirmmneumonic'}>Previous</Link>
          </button>
          <button>
            <Link to={'/privatekey'}>Next</Link>
          </button>
        </section>
      </main>
    );
  }
}

export default PublicKey;
