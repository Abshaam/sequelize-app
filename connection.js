const { Sequelize } = require("sequelize");

module.exports.connect = new Sequelize(process.env.DBNAME, process.env.UNAME, process.env.PASSWORD, {
    host: "127.0.0.1",
    dialect: 'mysql',
})

