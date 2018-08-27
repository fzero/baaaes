const Sequelize = require('sequelize');

module.exports = sequelize => {
  const key = sequelize.define(
    'keys',
    {
      freezeTableName: true
    }
  );
  key.belongsTo(User)

  return key;
};