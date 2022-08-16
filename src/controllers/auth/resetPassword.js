const {updatePassword} = require('../../services/user/user')
const {findForgetPassword} = require('../../services/user/user')
const bcrypt = require('bcrypt')

exports.resetPasswords = async(req,res)=>{
    let {email, otp , password , cpassword}   = req.body
    let conformUser = await findForgetPassword({
        $and:[
            {email},
            {otp}
        ]
    })
    if(!conformUser){
        res.json({
            type:"error",
            message:"User not found"
        })
        return;
    }
    if(password !== cpassword){
        res.json({
            type:"error",
            message:"Password and confirm password does not match"
        })
        return;
    }
    try{
        let hashPassword = await bcrypt.hash(password,10)
        const data = await updatePassword({
            email,
            password: hashPassword
        })
        res.json({
            type:"success",
            message:"Password updated successfully",
            data
        })
    }
    catch(err){
        console.log(err)
        res.json({
            type:"error",
            message:"Something went wrong"
        })
    }

}