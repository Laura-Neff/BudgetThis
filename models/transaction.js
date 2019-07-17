module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define("Transaction", {
    type: DataTypes.STRING,
    memo: DataTypes.TEXT,
    amount: DataTypes.REAL
  });

  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Transaction;
};
