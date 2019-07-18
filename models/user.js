module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    budget: DataTypes.REAL
  });
  User.associate = function(models) {
    User.hasMany(models.Transaction, {
      onDelete: "cascade"
    });
  };
  return User;
};
