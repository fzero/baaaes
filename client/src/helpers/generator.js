const bip39 = require('bip39');
const HDKey = require('hdkey');
const bip32 = require('bip32');

var mnemonic = bip39.generateMnemonic();
console.log(mnemonic);

const seed = bip39.mnemonicToSeedHex(mnemonic);
console.log(`seed = ${seed}`);
const hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'));
const node = bip32.fromBase58(hdkey.privateExtendedKey);
let child = node.derivePath('m/0/0');
console.log(node);
console.log(hdkey);
console.log(`PRIVATE: ${hdkey.privateExtendedKey}`);
console.log(`PUBLIC: ${hdkey.publicExtendedKey}`);
console.log(`CHILD ${JSON.stringify(child)}`);
