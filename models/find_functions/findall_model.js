const user_schema = require('../../schemas/user_schema');

const findall_model = async(email)=>{
const user  = await user_schema.findAll({where : {user_email : email}});
return user;
}

module.exports = findall_model;