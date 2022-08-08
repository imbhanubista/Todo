const Content = require('../../models/content')

// function to save the content
exports.saveContent = (data)=>{
    return await Content(data).save()
}