module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        budget: {
            type: DataTypes.REAL,
            defaultValue: 1000
        }
    });
    User.associate = function(models) {
        User.hasMany(models.Transaction, {
            onDelete: "cascade"
        });
    };
    return User;
};
