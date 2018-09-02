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

{
  /* <script type='text/javascript' id='coinbase_widget_loader' class='coinbase-widget-async-loader'> */
}
// document.currentScript.src = '';
(function() {
  function asyncLoad() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    var theUrl = 'https://buy.coinbase.com/static/widget.js';
    s.src =
      theUrl +
      (theUrl.indexOf('?') >= 0 ? '&' : '?') +
      'ref=' +
      encodeURIComponent(window.location.href);
    var embedder = document.getElementById('coinbase_widget_loader');
    embedder.parentNode.insertBefore(s, embedder);
  }
  if (window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();
// </script>
