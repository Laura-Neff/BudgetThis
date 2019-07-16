module.exports = function(sequelize, DataTypes) {
  var Transactions = sequelize.define("Transaction", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Transactions;
};
