const user_schema = require('../../schemas/user_schema');

// findAll functions returns all the user who matches the condition 
//find all user where user_email = email like condition ------>
const findall_model = async(email)=>{
const user  = await user_schema.findAll({where : {user_email : email}});
return user;
}

module.exports = findall_model;