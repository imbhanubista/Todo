const {Schema, model} = require("mongoose")

// to create the schema
const contentSchema = new Schema({
    title:{
        type:String,
        required: true
    },
   content:{
    type:String,
    required: true
   }
},{
    timestamps:true
})


module.exports = model("Content", contentSchema)