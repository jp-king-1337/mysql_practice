const { DataTypes, Model } = require("sequelize");
const db = require("../db/connection");

// Create our Student model and extend the Model constructor
class Student extends Model { }

// Initialize our table, using the init() method
Student.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                args: true,
                msg: "The email you entered is not a valid address."
            }
        }
    }
}, {
    sequelize: db,
    modelName: "student"
});

module.exports = Student;
