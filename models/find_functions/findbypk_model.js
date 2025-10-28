const user_schema = require('../../schemas/user_schema');

const findbypk_model = async(pk)=>{
const user = await user_schema.findByPk(pk);
return user;
}

module.exports = findbypk_model;