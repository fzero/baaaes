import React, { Component } from 'react';

class Market extends Component {
  render() {
    return (
      <table classname="market-table">
        <tr>
          <td>Coin</td>
          <td>Market Cap</td>
          <td>Price in BTC</td>
          <td>Circulating Supply</td>
          <td>24hr</td>
          <td>7 Day</td>
          <td>Purchase</td>
        </tr>
        <tr>
          <td>BTC</td>
          <td>Bitcoin</td>
          <td>99999999</td>
          <td>9000</td>
          <td>1</td>
          <td>10%</td>
          <td>-20%</td>
          <td>
            <button>Buy Button</button>
          </td>
        </tr>
        <tr>
          <td>LTC</td>
          <td>Litecoin</td>
          <td>99999999</td>
          <td>9000</td>
          <td>1</td>
          <td>10%</td>
          <td>-20%</td>
          <td>
            <button>Buy Button</button>
          </td>
        </tr>
        <tr>
          <td>ETH</td>
          <td>Ethereum</td>
          <td>99999999</td>
          <td>9000</td>
          <td>1</td>
          <td>10%</td>
          <td>-20%</td>
          <td>
            <button>Buy Button</button>
          </td>
        </tr>
        <tr>
          <td>DOGE</td>
          <td>Dogecoin</td>
          <td>99999999</td>
          <td>9000</td>
          <td>1</td>
          <td>10%</td>
          <td>-20%</td>
          <td>
            <button>Buy Button</button>
          </td>
        </tr>
      </table>
    );
  }
}
export default Market;
