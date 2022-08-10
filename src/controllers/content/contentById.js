const {findById} = require('../../services/content/content')

exports.getContentById = async(req,res)=>{
    let {id} =  req.params
    try{
        const content = await findById({_id:id})
        if(!content){
            res.json({
                type:"error",
                msg:"Content isn't available!!!"
            })
            return
        }
        res.json({
            type:"success",
            msg:"Your searched content is :",
            data: content
        })
    }
    catch(err){
        res.json({
            type:"error",
            msg:"Something went wrong!!!"
        })
    }
}