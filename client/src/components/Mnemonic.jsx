import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import generator from '../helpers/generator';
const generated = generator();

class Mnemonic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mnemonic: generated.mnemonic,
      privateKey: generated.wif,
      publicKey: generated.address,
      confirm: ''
    };
  }
  controlMnemonic = ev => {
    this.setState({ confirm: ev.target.value });
  };
  doesMatch = ev => {
    ev.preventDefault();
    if (this.state.confirm === this.state.mnemonic) {
      return <Redirect to="/makewallet" />;
    } else {
      return alert('They do not match!');
    }
  };

  render() {
    return (
      <div className="mnemonic">
        <form>
          <h3>Mnemonic Recovery Phrase</h3>
          <ul>
            Copy This
            <div>{this.state.mnemonic}</div>
            Re-Enter
            <div>
              <form onSubmit={this.doesMatch}>
                <input
                  type="text"
                  onChange={this.controlMnemonic}
                  value={this.state.confirm}
                  placeholder="Re-Enter your Mnemonic Phrase Here after you've copied it down somewhere safe!"
                />
              </form>
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
