const user_schema = require('../../schemas/user_schema');

const findand_countall_model = async(email)=>{
    console.log('email--->', email);
    const {count, user} = await user_schema.findAndCountAll({where : {user_email : email}, limit : 100, offset : 0});
    return {count, user};
}

module.exports = findand_countall_model;