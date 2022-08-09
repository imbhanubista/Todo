const {deleteContent} = require('../../services/content/content')

// function to delete content
exports.deletePostContent = async(req, res)=>{

    // delete by id
    const {id} = req.params
try{
    const result = await deleteContent({_id:id})
    res.json({
        message: "Content deleted successfully",
        result
    })
}
catch(error){
    console.log(error)
    res.json({
        type:"error",
        msg:"Something went wrong"
    })}

}