import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PrivateKey extends Component {
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
            <h3>Private Key</h3>
            <input placeholder="abvoi3uvjs838t1bf84bd73f5u48492" />
            <p>Add some notes on private key</p>
            <p>Please copy this down on paper</p>
            <button><Link to={'/publickey'}>Previous</Link></button>
            <button><Link to={'/createwallet'}>Next</Link></button>
          </div>
        </section>
      </main>
    )
  }
}

export default PrivateKey