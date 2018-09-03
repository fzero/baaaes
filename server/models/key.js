const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Key = sequelize.define(
    'keys',
    {
      publickey: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'Bitcoin'
      }
    },
    {
      timestamps: false
    }
  );
  return Key;
};
