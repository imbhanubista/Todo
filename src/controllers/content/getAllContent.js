const content = require('../../models/content')
const {getAllContent} = require('../../services/content/content')

exports.getAllContents =async (req,res)=>{ 
    try{
        const allContent = await getAllContent()
        res.json({
            type:"success",
            msg:"Successfully got content",
            allContent
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