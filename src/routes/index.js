const router = require("express").Router();

// to import the auth router from the auth folder
const auth = require("./auth");
const afterAuth = require("./afterAuth");
const { isLoggedIn } = require("../utils/jwt/jwt");

router.use("/auth", auth);
router.use("/content", isLoggedIn, afterAuth);

// to export the route
module.exports = router;
