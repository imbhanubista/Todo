const jwt = require("jsonwebtoken")
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const accessExpirey = process.env.JWT_EXPIREY

// to sign jwt token
const signJWT = (data, secret, expiryTime) => {
    return jwt.sign(data, secret, { expiresIn: expiryTime });
  };

//   function  to verify the access token 
const verifyJWT = (token, secret)=>{
    return jwt.verify(token, secret)
}

exports.signAccessToken =(data)=>{
    return signJWT(data, JWT_SECRET_KEY, accessExpirey )
}


exports.verifyAccessToken = (token)=>{
    return verifyJWT(token, signAccessToken)
}