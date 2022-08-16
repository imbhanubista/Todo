const Forget = require('../../models/forgetPassword');
const User = require('../../models/users');

exports.findUserDetails =async (condition)=>{
return await User.findOne(condition)
}


exports.saveUser =async(data)=>{
    return await new User(data).save()
}

exports.updateUser = async (condition, data)=>{
    return await User.updateOne(condition, data)
} 

// to save the forget password data in the database
exports.saveForgetPassword = async (data)=>{
    return await new Forget(data).save()
}

// update password 
exports.updatePassword = async (condition,data)=>{
    return await User.updateOne(condition,data)
}