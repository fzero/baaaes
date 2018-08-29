import React, { Component } from 'react';

class MakeWallet extends Component {
  render() {
    return (
      <div className="make-wallet">
        <form>
          <h3>Create New {/*Type of Wallet Here*/} Wallet</h3>
          <ul>
            <div>Private Key (Spend Funds)</div>
            <div>324[89u[esiodfjas[d8fu[8us[aduf</div>
            <div>Public Key (View/Recieve Funds)</div>
            <div>sad98fusad89pfusadfusadfus89adfu</div>
            <div>
              <button>Print Paper Wallet</button>
              <button>Done</button>
            </div>
          </ul>
        </form>
      </div>
    );
  }
}

export default MakeWallet;
