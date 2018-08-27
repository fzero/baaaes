const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Transaction = sequelize.define(
    'transactions',
  );
  // transactions.belongsTo

  // models.Transaction.belongsTo(models.User, {foreignKey: 'user_id', targetKey: 'id'})
  // models.Transaction.belongsTo(models.Blockchain, {foreignKey: 'blockchain_id', targetKey: 'id'})
  return Transaction;
};
