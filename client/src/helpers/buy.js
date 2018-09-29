const axios = require('axios');

// This file will handle all market information
const API_HOST = 'https://buy.coinbase.com';
const API_NAMESPACE = '?';
const BASEURL = `${API_HOST}${API_NAMESPACE}`;

// Axios instance - Custom Headers go here
const server = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json'
  }
});
// MARKET FUNCTIONS
const code = `code=${process.env.REACT_APP_API_CODE}`;
module.exports = function(address, amount) {
  return new Promise((resolve, reject) => {
    server
      .get(`${code}&address=${address}&amount=${amount}`)
      .then(result => {
        console.log(result);
        resolve(result.data);
      })
      .catch(errors => reject(errors));
  });
};
// `
// code={process.env.REACT_APP_API_CODE}&
// address={address}&
// amount={amount}&
// prefill_email{email}&
// state={success}`;
