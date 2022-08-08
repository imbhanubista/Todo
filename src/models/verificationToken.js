const {Schema,model} = require("mongoose")
const bcrypt = require("bcrypt")
const User = require('./users')

const verificationTokenSchema =  new Schema({
    user_id : {type:String, ref:User },
    type: String,
    token: String,
},{
    timestamps: true
})

verificationTokenSchema.pre("save", async function(next){
    try{
        const hashedToken = await bcrypt.hash(this.token, 10)
        this.token = hashedToken
        next()
    }
    catch(e){
        throw new Error(e)
    }
})


module.exports  = model ("VerificationToken", verificationTokenSchema)