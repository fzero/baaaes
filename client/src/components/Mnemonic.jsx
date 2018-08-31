import React, { Component } from 'react';

class Mnemonic extends Component {
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
            <input type="submit" />
          </ul>
        </form>
      </div>
    );
  }
}

export default Mnemonic;
