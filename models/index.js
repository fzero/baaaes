// Global model loader
// Receives a connected Sequelize instance
module.exports = sequelize => {
  let models = {
    User: require('./user')(sequelize),
    Blockchain: require('./blockchain')(sequelize),
    Transaction: require('./transaction')(sequelize)
  };

  models.syncAll = async options => {
    for (let key in models) {
      if (models[key].sync) {
        await models[key].sync(options);
      }
    }
  };

  return models;
};
