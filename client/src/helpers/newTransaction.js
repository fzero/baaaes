const bitcoin = require('bitcoinjs-lib');

const user = bitcoin.ECPair.fromWIF(
  'L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy'
);
const txb = new bitcoin.TransactionBuilder();

txb.setVersion(1);
txb.addInput(
  '61d520ccb74288c96bc1a2b20ea1c0d5a704776dd0164a396efec3ea7040349d',
  0
); // Alice's previous transaction output, has 15000 satoshis
txb.addOutput('1cMh228HTCiwS8ZsaakH8A8wze1JR5ZsP', 12000);
// (in)15000 - (out)12000 = (fee)3000, this is the miner fee

txb.sign(0, alice);

// prepare for broadcast to the Bitcoin network, see "can broadcast a Transaction" below
const rawtx = txb.build().toHex();

// //
// https://github.com/blockchain/api-v1-client-node/tree/master/pushtx
