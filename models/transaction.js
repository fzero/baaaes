const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Transaction = sequelize.define(
    'transactions',
    {
      freezeTableName: true
    }
  );

  return Transaction;
};
