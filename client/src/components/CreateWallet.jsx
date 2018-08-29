import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CreateWallet extends Component {
  render() {
    return (
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
        <button><Link to={'/privatekey'}>Private Key</Link></button>
        <button><Link to={'/coininfo'}>Coin Information</Link></button>
      </section>
    );
  }
}

export default CreateWallet;
