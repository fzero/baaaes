import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import prices from '../helpers/market.js';

class Market extends Component {
  constructor(props) {
    super(props);

    console.log(prices());
    this.state = {
      BTC: {
        Name: 'Bitcoin',
        Price: 7000,
        Symbol: 'BTC',
        Supply: 21000000,
        Change: 'img_url',
        MarketCap: 100000000,
        Volume: 10000000
      },
      LTC: {
        Name: 'Litecoin',
        Price: 7000,
        Symbol: 'LTC',
        Supply: 21000000,
        Change: 'img_url',
        MarketCap: 100000000,
        Volume: 10000000
      },
      ETH: {
        Name: 'Bitcoin',
        Price: 7000,
        Symbol: 'ETH',
        Supply: 21000000,
        Change: 'img_url',
        MarketCap: 100000000,
        Volume: 10000000
      },
      DOGE: {
        Name: 'DogeCoin',
        Price: 7000,
        Symbol: 'DOGE',
        Supply: 21000000,
        Change: 'img_url',
        MarketCap: 100000000,
        Volume: 10000000
      }
    };
  }
  _setStats = () => {
    prices().then(result =>
      this.setState({
        BTC: {
          Price: result.BTC.CAD,
          Supply: result.BTC.SUPPLY,
          Change: result.BTC.CHANGEPCTDAY,
          Volume: result.BTC.VOLUMEDAY,
          MarketCap: result.BTC.MKTCAP
        },

        LTC: {
          Price: result.LTC.CAD,
          Supply: result.LTC.SUPPLY,
          Change: result.LTC.CHANGEPCTDAY,
          Volume: result.LTC.VOLUMEDAY,
          MarketCap: result.LTC.MKTCAP
        },

        ETH: {
          Price: result.ETH.CAD,
          Supply: result.ETH.SUPPLY,
          Change: result.ETH.CHANGEPCTDAY,
          Volume: result.ETH.VOLUMEDAY,
          MarketCap: result.ETH.MKTCAP
        },
        DOGE: {
          Price: result.DOGE.CAD,
          Supply: result.DOGE.SUPPLY,
          Change: result.DOGE.CHANGEPCTDAY,
          Volume: result.DOGE.VOLUMEDAY,
          MarketCap: result.DOGE.MKTCAP
        }
      })
    );
    // .catch(error => alert(error));
  };
  componentDidMount() {
    // this._setStats();
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <td colSpan="2">Coin</td>
            <td>Market Cap</td>
            <td>Price in CAD</td>
            <td>Circulating Supply</td>
            <td>Change %/24hr</td>
            <td>Daily Volume</td>
            <td>Purchase</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTC</td>
            <td>Bitcoin</td>
            <td>{this.state.BTC.MarketCap}</td>
            <td>${this.state.BTC.Price}</td>
            <td>{this.state.BTC.Supply}</td>
            <td>{this.state.BTC.Change}</td>
            <td>{this.state.BTC.Volume}</td>
            <td>
              <button>Buy Button</button>
            </td>
          </tr>
          <tr>
            <td>LTC</td>
            <td>Litecoin</td>
            <td>{this.state.LTC.MarketCap}</td>
            <td>${this.state.LTC.Price}</td>
            <td>{this.state.LTC.Supply}</td>
            <td>{this.state.LTC.Change}</td>
            <td>{this.state.LTC.Volume}</td>
            <td>
              <button>Buy Button</button>
            </td>
          </tr>
          <tr>
            <td>ETH</td>
            <td>Ethereum</td>
            <td>{this.state.ETH.MarketCap}</td>
            <td>${this.state.ETH.Price}</td>
            <td>{this.state.ETH.Supply}</td>
            <td>{this.state.ETH.Change}</td>
            <td>{this.state.ETH.Volume}</td>
            <td>
              <button>Buy Button</button>
            </td>
          </tr>
          <tr>
            <td>DOGE</td>
            <td>Dogecoin</td>
            <td>{this.state.DOGE.MarketCap}</td>
            <td>${this.state.DOGE.Price}</td>
            <td>{this.state.DOGE.Supply}</td>
            <td>{this.state.DOGE.Change}</td>
            <td>{this.state.DOGE.Volume}</td>
            <td>
              <button>Buy Button</button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default Market;
