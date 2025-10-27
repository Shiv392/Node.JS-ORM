const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config');

const user_schema = sequelize.define('user', {
    user_id : {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey : true,
      allowNull : false,
      unique : true
    },
    user_name : {
        type : DataTypes.STRING(50),
        allowNull: false,
    },
    user_email : {
        type : DataTypes.STRING(),
        allowNull : false,
        unique : true
    },
    user_password : {
        type : DataTypes.STRING(),
        allowNull : false,
    }
},
{
    tableName : 'user',
    timestamps : true
})

module.exports = user_schema;