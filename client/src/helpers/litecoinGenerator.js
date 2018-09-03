const bip39 = require('bip39');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');

module.exports = function() {
  // GENERATES MNEMONIC
  const mnemonic = bip39.generateMnemonic();
  // CONVERT TO SEED
  const seed = bip39.mnemonicToSeed(mnemonic);
  // CONVERT SEED TO BIP32 to get keys
  const node = bip32.fromSeed(seed);
  // Get PrivateKey as Wallet Import Format
  const wif = node.toWIF();
  // Get keypair to get public address
  const keyPair = bitcoin.ECPair.fromWIF(wif);
  // Get PublicKey
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

  return {
    mnemonic,
    address,
    wif
  };
};

const LITECOIN = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0
};
keypair = bitcoin.ECPair.makeRandom({ network: LITECOIN });
wif = keypair.toWIF();
const { address } = bitcoin.payments.p2pkh({
  pubkey: keypair.publicKey,
  network: LITECOIN
});
console.log(address);
console.log('-------------');
console.log(wif);
// https://live.blockcypher.com/ltc/address/
