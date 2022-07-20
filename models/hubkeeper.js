const { DataTypes } = require('sequelize');
const { connect } = require("../connection");


const hubKeeper = connect.define('hubKeeper',{
    hubKeeper_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    },

    contact: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    educationalLevel: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['college', 'university', 'graduate']
    }
});

module.exports = hubKeeper