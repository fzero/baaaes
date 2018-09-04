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
server
  .get('/3KBKa6uJfFVAJnQ61B4EQDdE6Jscx326yF')
  .then(result => console.log(result));
// MARKET FUNCTIONS

module.exports = function(address) {
  return new Promise((resolve, reject) => {
    server
      .get(`/${address}`)
      .then(result => resolve(result.data))
      .catch(errors => reject(errors));
  });
};
// divide final_balane by 100,000,000 one hundred million
// /*
// Sample JSON Output
// data = {
//   hash160: 'bfd484467a421109ff1a945099ee8fa3b4c33562',
//   address: '3KBKa6uJfFVAJnQ61B4EQDdE6Jscx326yF',
//   n_tx: 1,
//   total_received: 563303,
//   total_sent: 0,
//   final_balance: 563303,
//   txs: [
//     {
//       ver: 2,
//       inputs: [
//         {
//           sequence: 4294967295,
//           witness: '',
//           prev_out: {
//             spent: true,
//             tx_index: 371215814,
//             type: 0,
//             addr: '1PmPuwwaU3xaHDALpuZx1qS948icinEGay',
//             value: 5138535690,
//             n: 1,
//             script: '76a914f9b8323f0314d9fa93f41f00674881062fef3b6788ac'
//           },
//           script:
//             '4830450221008337f46fd3439b563ee3e95d2d436e2fd6ad3d229c81e2763268c1d1863f01910220516cea500083843bbb73e01d80213ab3be6c5f334b70093dfa61e5b720ba97df012102faf895df92cd97c8bfa8834437e33b813288cb6823f34a54490ccac2e3174aca'
//         }
//       ],
//       weight: 896,
//       block_height: 539690,
//       relayed_by: '0.0.0.0',
//       out: [
//         {
//           spent: false,
//           tx_index: 371249165,
//           type: 0,
//           addr: '3KBKa6uJfFVAJnQ61B4EQDdE6Jscx326yF',
//           value: 563303,
//           n: 0,
//           script: 'a914bfd484467a421109ff1a945099ee8fa3b4c3356287'
//         },
//         {
//           spent: true,
//           tx_index: 371249165,
//           type: 0,
//           addr: '1NqaSzmVXDpTasLQTP8nLYCchLTXYneCGp',
//           value: 5137969787,
//           n: 1,
//           script: '76a914ef8a875e41fb4dccb945fe1fe5e307c7b703ec0688ac'
//         }
//       ],
//       lock_time: 0,
//       result: 0,
//       size: 224,
//       time: 1535921108,
//       tx_index: 371249165,
//       vin_sz: 1,
//       hash: 'e1e0ace4fe27080af605bf112e82802e5d269e1f81c7214ceb2cd098e0e50af6',
//       vout_sz: 2
//     }
//   ]
// };
