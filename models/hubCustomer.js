const bcrypt = require('bcrypt');
const { DataTypes } = require("sequelize");
const { connect } = require("../connection");



const hubCustomer = connect.define('hubCustomer',{
    hubCustomer_id: {
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

    fullName: {
        type: DataTypes.VIRTUAL,
        get(){
            return`${this.firstName} ${this.lastName}`
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val){
            const hashed = bcrypt.hashSync(val, 12);
            this.setDataValue('password', hashed);
        }
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
        type: DataTypes.STRING,
        allowNull: false
    },

    item: {
        type: DataTypes.STRING,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },



});

module.exports = hubCustomer