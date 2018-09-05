import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import prices from "../helpers/market.js";

class Landing extends Component {
  constructor(props) {
    super(props);

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
      <main>
        <section className="landing_cont">
          <div className="landing_reg">
            <h2 className="landing_reg-title">The Cryptorial</h2>
            <p className="landing_reg-para">
              Welcome to Cryptorial, a 10 step tutorial that focuses on the
              buying and selling of Bitcoin, as well as other cryptocoins. Here
              you will learn everything from how to create your very own
              crypto-wallet, to what cryptocurrency is, and how the blockchain
              functions. A lot of these words may seem unfamiliar to you at
              first, but in a short while, you will know enough to create a real
              crypto-wallet and have the knowledge to buy your own coins. To
              begin, click the register button below and let's get started!
            </p>
            <Link className="button" to={"/register"}>
              Register
            </Link>
          </div>
          <div className="landing_log">
            <h2 className="landing_reg-title">Create Wallets</h2>
            <p className="landing_reg-para">
              Once you have gone through and completed the tutorial, you will
              have enough knowledge on how the system works. From there you can
              create your own CryptoCoin wallets, start buying coins, and begin
              your dive into the world of CryptoCurrency.
            </p>
            <Link className="button" to={"/login"}>
              Login
            </Link>
          </div>
        </section>

        <section>
          <h2 className="landing_market-title">Coin Market</h2>
          <p className="landing_market-para">
            The Live Market, updated regulary
          </p>
          <div className="landing_market-line" />
          <Table
            className="landing_market-table"
            striped
            bordered
            condensed
            hover
          >
            <thead>
              <tr>
                <td colSpan="2">Coin</td>
                <td>Market Cap</td>
                <td>Price in CAD</td>
                <td>Circulating Supply</td>
                <td>Change %/24hr</td>
                <td>Daily Volume</td>
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
              </tr>
              <tr>
                <td>ETH</td>
                <td>Ethereum</td>
                <td>{this.state.ETH.MarketCap}</td>
                <td>${this.state.ETH.Price}</td>
                <td>{this.state.ETH.Supply}</td>
                <td>{this.state.ETH.Change}</td>
                <td>{this.state.ETH.Volume}</td>
              </tr>
              <tr>
                <td>LTC</td>
                <td>Litecoin</td>
                <td>{this.state.LTC.MarketCap}</td>
                <td>${this.state.LTC.Price}</td>
                <td>{this.state.LTC.Supply}</td>
                <td>{this.state.LTC.Change}</td>
                <td>{this.state.LTC.Volume}</td>
              </tr>
              <tr>
                <td>DOGE</td>
                <td>Dogecoin</td>
                <td>{this.state.DOGE.MarketCap}</td>
                <td>${this.state.DOGE.Price}</td>
                <td>{this.state.DOGE.Supply}</td>
                <td>{this.state.DOGE.Change}</td>
                <td>{this.state.DOGE.Volume}</td>
              </tr>
            </tbody>
          </Table>
        </section>
      </main>
    );
  }
}

export default Landing;
