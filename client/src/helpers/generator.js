const bip39 = require('bip39');
const HDKey = require('hdkey');

var mnemonic = bip39.generateMnemonic();
console.log(mnemonic);

const seed = bip39.mnemonicToSeedHex(mnemonic);
console.log(`seed = ${seed}`);
const hdkey = HDKey.fromMasterSeed(new Buffer(seed, 'hex'));
console.log(`PRIVATE: ${hdkey.privateExtendedKey}`);
console.log(`PUBLIC: ${hdkey.publicExtendedKey}`);
