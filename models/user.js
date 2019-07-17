module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    name: DataTypes.STRING,
    budget: DataTypes.REAL
  });
  User.associate = function(models) {
    User.hasMany(models.Transactions, {
      onDelete: "cascade"
    });
  };
  return User;
};
