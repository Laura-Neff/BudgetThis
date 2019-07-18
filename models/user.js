module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    budget: DataTypes.REAL
  });
  User.associate = function(models) {
    User.hasMany(models.Transaction, {
      onDelete: "cascade"
    });
<<<<<<< HEAD
  };
  return User;
};
=======
    User.associate = function(models) {
        User.hasMany(models.Transaction, {
            // onDelete: "cascade"
        });
    };
    return User;
};
>>>>>>> ae475233b5e80cdfda8ce8b7b55c9800e871e1af
