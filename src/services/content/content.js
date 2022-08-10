const Content = require('../../models/content')

// function to save the content
exports.saveContent = async(data)=>{
    return await Content(data).save()
}

// function to get all content
exports.getAllContent = async(condition)=>{
    return await Content.find(condition).populate("created_by")
}

// function to update content
exports.updateContent = async(condition, data)=>{
    return await Content.updateOne(condition, data)
}

// find content by id
exports.findContent = async(condition)=>{
    return await Content.find(condition)
}

// function to delete content
exports.deleteContent = async(condition)=>{
    return await Content.deleteOne(condition)
}

// find content by id
exports.findById = async(id)=>{
    return await Content.findById(id)
}