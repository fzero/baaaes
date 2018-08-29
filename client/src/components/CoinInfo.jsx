import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CoinInfo extends Component {
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
          <h3>Some Popular Digital Assets</h3>
          <p>
            Here are some of the most popular digital assets on the market today!
          </p>
          <div classname="eth-desc">
            <h3>Ethereum</h3>
            <p>desc.</p>
          </div>
          <div classname="btc-desc">
            <h3>Litecoin</h3>
            <p>desc.</p>
          </div>
          <div classname="doge-desc">
            <h3>Bitcoin</h3>
            <p>desc.</p>
          </div>
          <div classname="ltc-desc">
            <h3>Dogecoin</h3>
            <p>desc.</p>
          </div>
          <button><Link to={'/createwallet'}>Previous</Link></button>
          <button><Link to={'/samplebuy'}>Next</Link></button>
        </section>
      </main>
    );
  }
}

export default CoinInfo;