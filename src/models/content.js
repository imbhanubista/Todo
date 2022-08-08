const {Schema, model} = require("mongoose")
const User = require('./users')

// to create the schema
const contentSchema = new Schema({
    title:{
        type:String,
        required: true
    },
   body:{
    type:String,
    required: true
   },
   created_by:{
    type:String,
    ref: User
   }
},{
    timestamps:true
})


module.exports = model("Content", contentSchema)