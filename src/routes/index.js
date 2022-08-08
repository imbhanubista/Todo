const router = require('express').Router();

// to import the auth router from the auth folder
const auth = require('./auth');
router.use('/auth', auth);


// to export the route 
module.exports = router;
