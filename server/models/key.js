const Sequelize = require('sequelize');

module.exports = sequelize => {
  const key = sequelize.define('keys', {});

  return key;
};
