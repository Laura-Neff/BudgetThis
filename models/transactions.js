module.exports = function(sequelize, DataTypes) {
  var Transactions = sequelize.define("Transaction", {
    type: DataTypes.STRING,
    memo: DataTypes.TEXT,
    amount: DataTypes.REAL
  });

  Transactions.associate = function(models) {
    Transactions.belongsto(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Transactions;
};
