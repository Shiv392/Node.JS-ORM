const findand_countall_model = require("../../models/find_functions/findand_countall_model");

const findand_countall_controller = async(req, res)=>{
    try{
    const {count, user} = await findand_countall_model(email);
    return res.status(200).json({
        user : user,
        total_count : count
    })
    }
    catch(err){
        return res.status(500).json({
            message : err
        })
    }
}

module.exports = findand_countall_controller