const loginValidation = require('./loginValidation')
const signupValidation= require('./signupValidation')
const verify = require('./verify')
const contentValidation = require('../content/contentValidation')

module.exports ={
    contentValidation,
    verify,
    loginValidation,
    signupValidation
}