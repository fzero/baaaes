const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Key = sequelize.define(
    'keys',
    {
      publickey: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: 'default'
      }
    },
    {
      timestamps: false
    }
  );
  return Key;
};
