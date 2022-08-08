const joi = require("joi")

module.exports= joi.object({
    title: joi.string(),
    body: joi.string().required()
})