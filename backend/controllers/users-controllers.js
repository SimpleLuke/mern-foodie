const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");
const User = require("../models/user");

const usersList = async (req, res, next) => {
  let userList;
  try {
    userList = await User.find({}, "-password"); //'email name'
  } catch (err) {
    const error = new HttpError(
      "Fetching user list failed, please try again.",
      500
    );
    return next(error);
  }
  res
    .status(200)
    .json({ users: userList.map((user) => user.toObject({ getters: true })) });
};

const userSignup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid input. Please enter correct data.", 422)
    );
  }

  let exsitedUser;
  try {
    exsitedUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Could not sign up, please try again.", 500);
    return next(error);
  }

  if (exsitedUser) {
    return next(new HttpError("Email already exsits.", 422));
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    image: req.file.path,
    places: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Could not sign up, please try again.", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: createdUser.id,
        email: createdUser.email,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError("Could not sign up, please try again.", 500);
    return next(error);
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Could not log in, please try again.", 500);
    return next(error);
  }

  if (!identifiedUser) {
    return next(new HttpError("Could not identified user.", 403)); //401 not authorized 403 not authenticated
  }

  let isValid = false;
  try {
    isValid = await bcrypt.compare(password, identifiedUser.password);
  } catch (err) {
    const error = new HttpError("Invalid credentials, please try again.", 500);
  }

  if (!isValid) {
    const error = new HttpError("Could not identified user.", 403);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: identifiedUser.id,
        email: identifiedUser.email,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError("Could not log in, please try again.", 500);
    return next(error);
  }

  res.status(200).json({
    userId: identifiedUser.id,
    email: identifiedUser.email,
    token: token,
  });
};

exports.usersList = usersList;
exports.userSignup = userSignup;
exports.userLogin = userLogin;
