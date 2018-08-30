const bip39 = require('bip39');
const HDKey = require('hdkey');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');

// GENERATES MNEMONIC
const mnemonic = bip39.generateMnemonic();

console.log(
  `MNEMONIC = ${mnemonic} \n\n----------------------------------------`
);

const seed = bip39.mnemonicToSeed(mnemonic);
const node = bip32.fromSeed(seed);
const wif = node.toWIF();
console.log(`WIF = ${wif}`);

const keyPair = bitcoin.ECPair.fromWIF(wif);
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

console.log(`PUBLIC KEY = ${address}`);
