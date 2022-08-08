const joi = require("joi");

module.exports = joi.object({
  name: joi.string().min(3).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().min(5).required(),
});
