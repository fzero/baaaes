const axios = require('axios');

// This file will handle all market information

const API_HOST = 'https://blockexplorer.com';
const API_NAMESPACE = '/api/addr-validate';
const BASEURL = `${API_HOST}${API_NAMESPACE}`;

// Axios instance - Custom Headers go here
const server = axios.create({
  baseURL: BASEURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});
// MARKET FUNCTIONS

module.exports = function(address) {
  return new Promise((resolve, reject) => {
    server
      .get(`/${address}`)
      .then(result => resolve(result.data))
      .catch(errors => reject(errors));
  });
};
server
  .get('/19SokJG7fgk8iTjemJ2obfMj14FM16nqzj')
  .then(result => console.log(result.data));
