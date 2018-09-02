import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import generator from '../helpers/generator';

class Mnemonic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mnemonic: '',
      privateKey: '',
      publicKey: '',
      confirm: ''
    };
  }

  _generator = () => {
    let generated = generator();
    this.setState({
      mnemonic: generated.mnemonic,
      privateKey: generated.wif,
      publicKey: generated.address
    });
  };

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
  componentDidMount() {
    this._generator();
  }

  render() {
    return (
      <div className="mnemonic">
        <h3>Mnemonic Recovery Phrase</h3>
        <ul>
          Copy This
          <div>{this.state.mnemonic}</div>
          Re-Enter
          <div>
            <form onSubmit={this.doesMatch}>
              <input
                className="mnemonic-input"
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
      </div>
    );
  }
}

export default Mnemonic;
