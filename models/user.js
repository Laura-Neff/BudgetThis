module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Users", {
        name: DataTypes.STRING,
        budget: DataTypes.REAL
    });
    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Transactions, {
            onDelete: "cascade"
        });
    };
    return User;
};