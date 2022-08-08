const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const accessExpirey = process.env.JWT_EXPIREY;

// to sign jwt token
const signJWT = (data, secret, expiryTime) => {
  return jwt.sign(data, secret, { expiresIn: expiryTime });
};

//   function  to verify the access token
// const verifyJWT = (token, secret)=>{
//     return jwt.verify(token, secret)
// }

exports.signAccessToken = (data) => {
  return signJWT(data, JWT_SECRET_KEY, accessExpirey);
};

// exports.verifyAccessToken = (token)=>{
//     return verifyJWT(token, signAccessToken)
// }

exports.isLoggedIn = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token || token === "" || token.length < 1) {
    res.json({
      type: "error",
      msg: "Token is missing !!!",
    });
    return;
  }
  token = token.split(" ");
  let actualToken = token[1];
  if (!actualToken || actualToken === "" || actualToken.length < 1) {
    res.json({
      type: "error",
      msg: "Token is missing !!!",
    });
    return;
  }

  try {
    let verifiedToken = jwt.verify(actualToken, JWT_SECRET_KEY);
    req.isLoggedInData = verifiedToken;
    next();
  } catch (err) {
    console.log(err)
    res.json({
      type: "error",
      msg: "Something went wrong !!!",
    });
  }
};

