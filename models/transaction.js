const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Transaction = sequelize.define(
    'transactions',
    {
      freezeTableName: true
    }
  );
  Transaction.belongsTo(User)
  Transaction.belongsTo(Blockchain)

  return Transaction;
};
