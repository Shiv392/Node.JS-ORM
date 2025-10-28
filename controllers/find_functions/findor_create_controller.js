const findor_create_model = require("../../models/find_functions/findorcreate_model");

const findor_create_controller = async(req, res)=>{
const {name, email, password} = req.body;
console.log('00000---->', name, email, password)
try{
 const {user, created} = await findor_create_model(name, email, password);
 if(created){
    return res.status(201).json({
        message : 'New user has been created'
    })
 }
 else{
    return res.status(200).json({
        user : user
    })
 }
}
catch(err){
    return res.status(500).json({
        message : 'serve error',
        error : err
    })
}
}

module.exports = findor_create_controller;