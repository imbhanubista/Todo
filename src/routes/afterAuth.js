const afterAuth = require('express').Router();
const {postContent} = require('../controllers/content/content')
const {validateInputs} = require('../utils/middleware/validateInputs');
const { contentValidation } = require('../validation/auth');
const {getAllContents} = require('../controllers/content/getAllContent')

afterAuth.post('/post',validateInputs(contentValidation),   postContent )
afterAuth.get('/get-all-content', getAllContents )

module.exports = afterAuth;