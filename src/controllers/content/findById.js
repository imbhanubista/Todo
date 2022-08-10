const {updateContent, findContent} = require('../../services/content/content')

exports.findById = async(req,res)=>{
    let {id} = req.params
   try{
    const contentByUserId = await findContent({created_by:id})
    if(!contentByUserId){
        res.json({
            type:"error",
            msg:"User haven't created single content yet !!!"
        })
        return
    }
    res.json({
        type:"success",
        msg:"Content created by the user are ",
        data : contentByUserId
    })
   }
   catch(err){
    res.json({
        type:'error',
        msg:"Something went wrong"
    })
   }
  
}