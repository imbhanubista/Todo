const auth = require('express').Router();
const {registerUser} = require('../controllers/auth/register');
const {VerifyEmail} = require('../controllers/auth/verify')
const {login} = require('../controllers/auth/login')
const {validateInputs} = require('../utils/middleware/validateInputs')
// validation
const {
    loginValidation,
    signupValidation,
    verify
} = require('../validation/auth')

auth.post('/register', validateInputs(signupValidation), registerUser)
auth.get('/verify', validateInputs(verify), VerifyEmail )
auth.post('/login', validateInputs(loginValidation),  login)

// to export the route
module.exports = auth;