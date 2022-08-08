const {updateUser} = require("../../services/user/user")
const {findVerificationToken, deleteVerificationToken} = require("../../services/user/verification")
const bcrypt = require("bcrypt")

exports.VerifyEmail = async (req,res)=>{
    const {token, user_id} = req.query
    const verificationToken = await findVerificationToken({
        $and:[
            {
                type:"signup_email",
            },
            {
                user_id
            }
        ]
    })
    if(!verificationToken){
        res.json({
            type:"error",
            msg:"Token not found"
        })
        return
    }
    if(!(await bcrypt.compare(token, verificationToken.token))){
        res.json({
            type:'error',
            msg:"Token doesn't match !!"
        })
        return
    }
    await updateUser(
        {_id: user_id},
        {isEmailVerified : true}
    )
    await deleteVerificationToken({
        _id: verificationToken._id
    })
    res.json({
        type:"success",
        msg:"User verified successfully"
    })
}