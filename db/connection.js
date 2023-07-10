const { Sequelize } = require("sequelize");

const Sequelize = new Sequelize("student_app_db", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports(Sequelize)