const {findUserDetails} = require("../../services/user/user")
const bcrypt = require("bcrypt")
const {signAccessToken} = require("../../utils/jwt/jwt")
exports.login = async(req,res)=>{
    const {email,password} = req.body
    try{
       const userDetail =  await findUserDetails({email})
            if(!userDetail){
                res.json({
                    type:"error",
                    msg: "User doesn't found !!!"
                })
                return
            }
            if(!(await bcrypt.compare(password, userDetail.password))){
                res.json({
                    type:"error",
                    msg:"Password doesn't match !!!"
                })
            }

            const jwtSign = signAccessToken({user_id: userDetail._id  })
            res.json({
                type:"success",
                msg:"User Signed successfully!!",
                data:{
                    email: userDetail.email,
                    token: jwtSign
                }
            })
    }
    catch(err){
        console.log(err)
        res.json({
            type:"error",
            msg:"Something went wrong !!!"
        })
    }

}