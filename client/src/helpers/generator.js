const bip39 = require('bip39');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');

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
console.log(mnemonic);
console.log(`--------------------`);

console.log(address);
console.log(`--------------------`);

console.log(wif);
console.log(`--------------------`);
