import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import generator from '../helpers/generator';
const generated = generator();

class Mnemonic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mnemonic: generated.mnemonic,
      privateKey: generated.wif,
      publicKey: generated.address
    };
  }
  render() {
    return (
      <div className="mnemonic">
        <form>
          <h3>Mnemonic Recovery Phrase</h3>
          <ul>
            Copy This
            <div>
              Apple John Place Cat Rat Fungus Went Happy Socks Engineer
              Galapagos Day Sally
            </div>
            Re-Enter
            <div>
              <textarea placeholder="Re-Enter your Mnemonic Phrase Here after you've copied it down somewhere safe!" />
            </div>
            {/* Eventually setup an intermediary confirm */}
            <Link
              to={{
                pathname: '/makewallet',
                state: {
                  privateKey: this.state.privateKey,
                  publicKey: this.state.publicKey
                }
              }}
            >
              Get Keys
            </Link>
          </ul>
        </form>
      </div>
    );
  }
}

export default Mnemonic;
