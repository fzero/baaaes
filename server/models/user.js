const Sequelize = require('sequelize');
const uuid = require('uuid/v4');

module.exports = sequelize => {
  const User = sequelize.define(
    'users',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
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
      },
      tutorialcomplete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return User;
};
