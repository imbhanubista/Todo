const loginValidation = require('./loginValidation')
const signupValidation= require('./signupValidation')
const verify = require('./verify')
const contentValidation = require('../content/contentValidation')
const resetPassword = require('./resetPassword')

module.exports ={
    contentValidation,
    verify,
    loginValidation,
    signupValidation,
    resetPassword
}