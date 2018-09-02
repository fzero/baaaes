const axios = require('axios');

// This file will handle all market information

const API_HOST = 'https://blockchain.info';
const API_NAMESPACE = '/rawaddr';
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

module.exports = function(address) {
  return new Promise((resolve, reject) => {
    server
      .get(`/${address}`)
      .then(result => resolve(result.data.RAW))
      .catch(errors => reject(errors));
  });
};
