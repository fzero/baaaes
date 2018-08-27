const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Blockchain = sequelize.define(
    'blockchain',
    {
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      parent: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      freezeTableName: true
    }
  );
  return Blockchain;
};
