const verificationToken = require('../../models/verificationToken')
const VerificationToken = require('../../models/verificationToken')

// function to save the verification token
exports.saveVerificationToken  =async (data)=>{
    return await new VerificationToken(data).save()
}

// function to find the verification token
exports.findVerificationToken = async(condition)=>{
return await verificationToken.findOne(condition)
}

// function to delete verification code
exports.deleteVerificationToken = async (condition)=>{
    return await verificationToken.deleteOne(condition)
}

