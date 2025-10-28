const findbypk_model = require("../../models/find_functions/findbypk_model");

const findbypk_controller = async(req, res)=>{
const {pk} = req.query;
try{
const user = await findbypk_model(Number(pk));
return res.status(200).json({
    message : 'primary key retrival successfull',
    user : user
})
}
catch(err){
    return res.status(502).json({
        message : 'Server error',
        error : err
    })
}
}

module.exports = findbypk_controller;