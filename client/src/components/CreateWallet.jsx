import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CreateWallet extends Component {
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
          <h3>You have successfully created your very own Test Wallet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            error dolor consequuntur, natus eum itaque harum fugit perspiciatis
            nobis id aperiam sed architecto et esse perferendis nisi dolorem
            voluptas repellat.Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Beatae, error dolor consequuntur, natus eum itaque harum fugit
            perspiciatis nobis id aperiam sed architecto et esse perferendis nisi
            dolorem voluptas repellat.
          </p>
          <button><Link to={'/privatekey'}>Previous</Link></button>
          <button><Link to={'/coininfo'}>Next</Link></button>
        </section>
      </main>
    );
  }
}

export default CreateWallet;
