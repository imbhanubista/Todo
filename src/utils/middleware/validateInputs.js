const joi = require("joi")

exports.validateInputs =(schema)=>{
return (req,res,next)=>{
    const data = req.method === "GET" ? req.query : req.body;
    const {error} = schema.validate(data,{
        errors :{wrap:{label:""}},
    })

    if (error){
        res.json({
            type:"error",
            msg: error.details[0].message,
        })
        return
    }
    next()
}
}