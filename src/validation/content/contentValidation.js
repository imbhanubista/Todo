const joi = require("joi")

module.exports= joi.object({
    title: joi.object(),
    content: joi.object().required()
})