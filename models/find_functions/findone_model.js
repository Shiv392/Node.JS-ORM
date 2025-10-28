const { and } = require('sequelize');
const user_schema = require('../../schemas/user_schema');

//find user where user_email = email------------>
const findone_model = async(email)=>{
const user = await user_schema.findOne({where : {user_email : email}});
return user;
}

module.exports = findone_model;