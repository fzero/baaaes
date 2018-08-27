const Sequelize = require('sequelize');

module.exports = sequelize => {
  const User = sequelize.define(
    'users',
    {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      balance: {
        type: Sequelize.FLOAT
      }
    },
    {
      freezeTableName: true
    }
  );

  return User;
};
