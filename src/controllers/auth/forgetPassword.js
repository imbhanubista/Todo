const { findUserDetails } = require('../../services/user/user');
const {saveForgetPassword} = require('../../services/user/user');
const {nanoid} = require('nanoid');
const mail = require('../../utils/mail/mail');

exports.forgetPassword = async(req,res)=>{
    const { email } = req.body;
    // at first we need to find the user with the email address that is sent in the request
    const user = await findUserDetails({email})
    if(!user){
    res.json({
        type:"error",
        message:"User not found"
    })
    return;
    }
    // to generate the random otp password
    const otp = nanoid(4);
    try{
        const data = await saveForgetPassword({
            email,
            otp
        })
        mail(email, "OTP", `<h1>OTP for forget password is ${otp}</h1>`)
        res.json({
            type:"success",
            message:"OTP sent to your email",
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