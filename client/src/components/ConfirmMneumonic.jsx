import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ConfirmMneumonic extends Component {
  render() {
    return(
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
          <div>
            <h3>Enter Mnemonic Phrase</h3>
            <textarea placeholder="Please re-enter your Mnemonic Phrase here..." />
            <button><Link to={'/createmneumonic'}>Previous</Link></button>
            <button><Link to={'/publickey'}>Next</Link></button>
          </div>
        </section>
      </main>
    )
  }
}

export default ConfirmMneumonic
