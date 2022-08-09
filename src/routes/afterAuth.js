const afterAuth = require('express').Router();
const {postContent} = require('../controllers/content/content')
const {validateInputs} = require('../utils/middleware/validateInputs');
const { contentValidation } = require('../validation/auth');
const {getAllContents} = require('../controllers/content/getAllContent')
const {findById} = require('../controllers/content/findById')
const {deletePostContent} = require('../controllers/content/deleteContent')


afterAuth.post('/post',validateInputs(contentValidation),   postContent )
afterAuth.get('/get-all-content', getAllContents )
afterAuth.get('/by-id/:id', findById )
afterAuth.delete('/delete-content/:id', deletePostContent )

module.exports = afterAuth;