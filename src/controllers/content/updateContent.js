const {findContent, updateContent} =  require('../../services/content/content')
exports.updateContent = async(req,res)=>{
    let {id} = req.params
    let{title,body} = req.body
    try{
        
        await updateContent({_id:id},{
            $set:{
                title,
                body
            }
        })
        res.json({
            type:"success",
            msg:"Content updated successfully"
        })
    }
    catch(err){
        res.json({
            type:"error",
            msg:"Something went wrong"
        })
    }
}