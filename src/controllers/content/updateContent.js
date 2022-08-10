const {findContent, updateContent} =  require('../../services/content/content')
exports.updateContent = async(req,res)=>{
    let {id} = req.params
    let{title,body} = req.body
    try{
        const content = await findContent({_id:id})
        if(!content){
            res.json({
                type:"error",
                msg:"Content doesn't exist!!!"
            })
            return
        } 
        await updateContent({title,body})
    }
    catch(err){
        res.json({
            type:"error",
            msg:"Something went wrong"
        })
    }
}