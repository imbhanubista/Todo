const joi = require("joi");

module.exports = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().min(5).required(),
  cpassword: joi.string().min(5).required(),
  otp: joi.string().required(),
});
