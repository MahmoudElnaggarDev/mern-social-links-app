const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
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
});

userSchema.statics.signup = async function (name, email, password) {
  if (!name || !email || !password) {
    throw Error("All fields must be filled");
  }

  const isEmailExist = await this.findOne({ email });

  if (isEmailExist) {
    throw Error("Email already in use, login instead");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ name, email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!user) {
    throw Error("Email not found, signup first");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Password is not correct");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
