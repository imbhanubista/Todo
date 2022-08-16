const {updatePassword} = require('../../services/user/user')

exports.resetPassword = async(req,res)=>{
    let {email, otp , password , cpassword}   = req.body
}