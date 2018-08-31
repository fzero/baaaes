const axios = require('axios');

// This file will handle all market information

const API_HOST = 'https://min-api.cryptocompare.com';
const API_NAMESPACE = '/data';
const BASEURL = `${API_HOST}${API_NAMESPACE}`;

// Axios instance - Custom Headers go here
const server = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// MARKET FUNCTIONS

function getPrices() {
  return new Promise((resolve, reject) => {
    server
      .get(
        `/pricemulti?fsyms=BTC,ETH,LTC,DOGE&tsyms=USD,CAD&extraParams=walletCryptorial`
      )
      .then(result => resolve(result.data))
      .catch(errors => reject(errors));
  });
}

getPrices().then(result => console.log(result));
