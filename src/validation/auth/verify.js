const joi = require("joi")

module.exports = joi.object({
    token: joi.string().required(),
    user_id: joi.string().required(),
})