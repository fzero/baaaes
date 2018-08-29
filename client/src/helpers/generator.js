const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

var mnemonic = bip39.generateMnemonic();
console.log(mnemonic);

const hash = bitcoin.crypto.sha256(Buffer.from(mnemonic));

const keyPair = bitcoin.ECPair.fromPrivateKey(hash);
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

// Generating addresses from SHA256 hashes is not secure if the input to the hash function is predictable
// Do not use with predictable inputs
console.log({ address });
