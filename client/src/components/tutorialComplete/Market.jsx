import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import prices from "../../helpers/market.js";
import BuyBitcoin from "./market/buyBitcoin";

class Market extends Component {
  constructor(props) {
    super(props);

    console.log(prices());
    this.state = {
      BTC: {
        Name: "Bitcoin",
        Price: 7000,
        Symbol: "BTC",
        Supply: 21000000,
        Change: "img_url",
        MarketCap: 100000000,
        Volume: 10000000
      },
      LTC: {
        Name: "Litecoin",
        Price: 7000,
        Symbol: "LTC",
        Supply: 21000000,
        Change: "img_url",
        MarketCap: 100000000,
        Volume: 10000000
      },
      ETH: {
        Name: "Ethereum",
        Price: 7000,
        Symbol: "ETH",
        Supply: 21000000,
        Change: "img_url",
        MarketCap: 100000000,
        Volume: 10000000
      },
      DOGE: {
        Name: "DogeCoin",
        Price: 7000,
        Symbol: "DOGE",
        Supply: 21000000,
        Change: "img_url",
        MarketCap: 100000000,
        Volume: 10000000
      }
    };
  }
  _setStats = () => {
    prices().then(result =>
      this.setState({
        BTC: {
          Price: result.BTC.CAD.PRICE,
          Supply: result.BTC.CAD.SUPPLY,
          Change: result.BTC.CAD.CHANGEPCTDAY,
          Volume: result.BTC.CAD.VOLUMEDAY,
          MarketCap: result.BTC.CAD.MKTCAP
        },

        LTC: {
          Price: result.LTC.CAD.PRICE,
          Supply: result.LTC.CAD.SUPPLY,
          Change: result.LTC.CAD.CHANGEPCTDAY,
          Volume: result.LTC.CAD.VOLUMEDAY,
          MarketCap: result.LTC.CAD.MKTCAP
        },

        ETH: {
          Price: result.ETH.CAD.PRICE,
          Supply: result.ETH.CAD.SUPPLY,
          Change: result.ETH.CAD.CHANGEPCTDAY,
          Volume: result.ETH.CAD.VOLUMEDAY,
          MarketCap: result.ETH.CAD.MKTCAP
        },
        DOGE: {
          Price: result.DOGE.CAD.PRICE,
          Supply: result.DOGE.CAD.SUPPLY,
          Change: result.DOGE.CAD.CHANGEPCTDAY,
          Volume: result.DOGE.CAD.VOLUMEDAY,
          MarketCap: result.DOGE.CAD.MKTCAP
        }
      })
    );
  };
  componentDidMount() {
    this._setStats();
  }

  render() {
    return (
      <section>
        <h1 className="market_title">Coin Market</h1>
        <div className="market_line" />
        <Table className="market_table" striped bordered condensed hover>
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
                <BuyBitcoin />
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
                <Button disabled>Buy Button</Button>
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
                <Button disabled>Buy Button</Button>
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
                <Button disabled>Buy Button</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    );
  }
}
export default Market;
