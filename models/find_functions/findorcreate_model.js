const user_schema = require('../../schemas/user_schema');


//findOrCreate function first find for the specific column in the table.
//if not record matches then it will create an new record using detaults array --------------->
const findor_create_model = async(name, email, password)=>{
    console.log(name, email, password)
const [user, created] = user_schema.findOrCreate({
    where : {user_email : email},
    defaults : {user_name : name, user_password : password}
});

return {user, created};
}

module.exports = findor_create_model