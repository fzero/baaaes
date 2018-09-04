var ethers = require('ethers');

const newWallet = ethers.Wallet.createRandom();
console.log(newWallet);
// wild... that's it

const Etherscan = new ethers.providers.EtherscanProvider(
  (network = 'homestead'),
  (apiAcessToken = 'H3J5K2HRT3F3GKR13U5DHT2XI8PVR1YJAK')
);
newWallet.provider = Etherscan;
console.log(newWallet);
newWallet
  .getBalance()
  .then(result => console.log(result.toNumber()))
  .catch(error => reject(error));
