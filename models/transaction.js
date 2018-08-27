const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Transaction = sequelize.define(
    'transactions',
    {
      freezeTableName: true
    }
  );
  Transaction.belongsTo(User, {foreignKey: 'user_id'})
  Transaction.belongsTo(Blockchain, {foreignKey: 'blockchain_id'})

  return Transaction;
};
