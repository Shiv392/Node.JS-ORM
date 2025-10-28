const user_schema = require('../../schemas/user_schema');

// findAll functions returns all the user who matches the condition 
//find all user where user_email = email like condition ------>
const findall_model = async(email)=>{
const user  = await user_schema.findAll({where : {user_email : email}});
return user;
}

//selected only mentioned column using attributes.
const findall_selected_cols = async(email)=>{
    const user = await user_schema.findAll({
        attributes : ['user_id', 'user_name'],
        where : {user_email : email}
    })
}

//adding offset and limit 
//it will fetch 50 records and sort the recrod in DESC form by user_id columns 
const findall_offset_limit = async(email)=>{
    const user = await user_schema.findAll({
        where : {user_email : email},
        limit : 50,
        order : ['user_id', 'DESC']
    })
}

module.exports = findall_model;