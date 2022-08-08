const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// to create the schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    // converting environment variable to a number
    // hashing the password
    const hashedPassword = await bcrypt.hash(this.password, 10);
    // setting the hashed password to the user
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = model("User", userSchema);
