// Global model loader
// Receives a connected Sequelize instance
module.exports = sequelize => {
  let models = {
    User: require('./user')(sequelize),
    Blockchain: require('./blockchain')(sequelize),
    Transaction: require('./transaction')(sequelize)
  };
  models.Transaction.belongsTo(models.User, {foreignKey: 'user_id', targetKey: 'id'})
  models.Transaction.belongsTo(models.Blockchain, {foreignKey: 'blockchain_id', targetKey: 'id'})

  models.syncAll = async options => {
    for (let key in models) {
      if (models[key].sync) {
        await models[key].sync(options);
      }
    }
  };

  return models;
};
