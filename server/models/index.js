// Global model loader
// Receives a connected Sequelize instance
module.exports = sequelize => {
  let models = {
    User: require("./user")(sequelize),
    // Blockchain: require('./blockchain')(sequelize),
    // Transaction: require("./transaction")(sequelize),
    Key: require("./key")(sequelize)
  };
  // Define table relationships
  // models.Transaction.belongsTo(models.User);
  // models.Transaction.belongsTo(models.Blockchain);
  models.Key.belongsTo(models.User);

  models.syncAll = async options => {
    for (let key in models) {
      if (models[key].sync) {
        await models[key].sync(options);
      }
    }
  };

  return models;
};
