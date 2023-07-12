const { Model, DataTypes } = require("sequelize");

class User extends Model { }

User.init({
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            min: 6
        }
    }
}, {
    sequelize: db,
    modelName: "user"
});


module.exports = User;