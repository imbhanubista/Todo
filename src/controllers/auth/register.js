const { findUserDetails, saveUser } = require("../../services/user/user");
const mail = require("../../utils/mail/mail");
const {nanoid} = require("nanoid");
const { saveVerificationToken } = require("../../services/user/verification");

exports.registerUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const userDetail = await findUserDetails({ email });
    if (userDetail) {
      res.json({
        type: "error",
        message: "User already exists",
      });
      return;
    }
    // to create a new user
    const savedUser = await saveUser({ email, name, password });
    // to generate the random token for verification of user
    const token = nanoid(8);
    await saveVerificationToken({
      user_id: savedUser._id,
      token,
      type: "signup_email",
    });

    mail(
      email,
      "Registration",
      `User has been registered successfully, <em>Your verification toke is ${token} Click the given link to verify the user <br/>
        <a href=${req.headers.host}/verify?token=${token}&user_id=${savedUser._id}> <b>Verify</b> </a>
        </em>`
    );
    res.json({
      type: "success",
      msg: "Successfully Register User",
      savedUser,
      linkMessage: `Your verification toke is ${token} Click the given link ${req.headers.host}/verify?token=${token}&user_id=${savedUser._id}`,
    });
  } catch (err) {
    console.log(err)
    res.json({
      type: "error",
      message: "Error registering user",
    });
  }
};
