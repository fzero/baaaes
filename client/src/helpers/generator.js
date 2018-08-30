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
console.log(`SEED = ${seed}\n------------------------`);
const node = bip32.fromSeed(seed);
console.log(`WIF = ${node.toWIF()}`);
console.log(`PUBLIC KEY= ${node.derive}`);
// const string = node.toBase58();
// console.log(string);
// const restored = bip32.fromBase58(string);
// console.log(restored);

// // console.log(mnemonic);

// const seed = bip39.mnemonicToSeedHex(mnemonic);
// // console.log(`seed = ${seed}`);
// const hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'));

// key.compressed = false;
// console.log(key.privateWif); // => 5Hx15HFGyep2CfPxsJKe2fXJsCVn5DEiyoeGGF6JZjGbTRnqfiD
// // Need to convert xpriv to private key
// // Testing various pieces of the object below.
// const node = bip32.fromBase58(
//   hdkey.privateExtendedKey,
//   bitcoin.networks.mainnet
// );
// // console.log(`PRIVATE: ${hdkey.privateExtendedKey},
// // short private: ${JSON.stringify(private)}`);

// // console.log(`PUBLIC: ${hdkey.publicExtendedKey}`);
// console.log(`PRIVATE: ${key.privateExtendedKey}`);
// console.log(node.toWIF());
