import React, { Component } from 'react';

class Mneumonic extends Component {
  render() {
    return (
      <div className="mneumonic">
        <form>
          <h3>Mneumonic Recovery Phrase</h3>
          <ul>
            Copy This
            <div>
              Apple John Place Cat Rat Fungus Went Happy Socks Engineer
              Galapagos Day Sally
            </div>
            Re-Enter
            <div>
              <textarea placeholder="Re-Enter your Mneumonic Phrase Here after you've copied it down somewhere safe!" />
            </div>
            <input type="submit" />
          </ul>
        </form>
      </div>
    );
  }
}

export default Mneumonic;
