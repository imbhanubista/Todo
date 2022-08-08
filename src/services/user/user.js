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