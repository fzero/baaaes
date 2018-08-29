const bip39 = require('bip39');
const HDKey = require('hdkey');
const bip32 = require('bip32');
var bitcoin = require('bitcoinjs-lib');

var mnemonic = bip39.generateMnemonic();
console.log(mnemonic);

const seed = bip39.mnemonicToSeedHex(mnemonic);
console.log(`seed = ${seed}`);
const hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'));
// Need to convert xpriv to private key
// Testing various pieces of the object below.
const private = bitcoin.ECPair.fromPrivateKey(hdkey.privateKey);
console.log(`PRIVATE: ${hdkey.privateExtendedKey},
short private: ${JSON.stringify(private)}`);

console.log(`PUBLIC: ${hdkey.publicExtendedKey}`);
