
const findone_model = require('../../models/find_functions/findone_model');

const findone_controller = async(req, res)=>{
    const {email} = req.query;
    const user = await findone_model(email);
    if(user){
        return res.status(200).json({
            message : 'User retrival successfull',
            user : user
        })
    }

    else{
        return res.status(404).json({
            message : 'No user found'
        })
    }
}

module.exports = findone_controller;