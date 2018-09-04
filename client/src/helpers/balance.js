const axios = require('axios');

// This file will handle all market information

const API_HOST = 'https://blockexplorer.com';
const API_NAMESPACE = '/api/addr';
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
/* dont believe you have to divide balance by 100,000,000 - that is likely balance in satoshi's.
result = {
    addrStr: '3KBKa6uJfFVAJnQ61B4EQDdE6Jscx326yF',
    balance: 0,
    balanceSat: 0,
    totalReceived: 0.00563303,
    totalReceivedSat: 563303,
    totalSent: 0.00563303,
    totalSentSat: 563303,
    unconfirmedBalance: 0,
    unconfirmedBalanceSat: 0,
    unconfirmedTxApperances: 0,
    txApperances: 2,
    transactions: [
      'f0b14c18baecfbce5f027d29a3a45624b897e7e9d9c23d16c57422c779179eba',
      'e1e0ace4fe27080af605bf112e82802e5d269e1f81c7214ceb2cd098e0e50af6'
    ]
  }
};
*/
