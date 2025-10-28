const findall_model = require("../../models/find_functions/findall_model");

const findall_controller = async(req,res)=>{
const {email} = req.query;
try{
const user = await findall_model(email);
if(user){
    return res.status(200).json({
        user : user,
        message : 'All User retrived successfully'
    })
}
}
catch(err){
    return res.status(500).json({
        message : 'Server error'
    })
}
}

module.exports = findall_controller;