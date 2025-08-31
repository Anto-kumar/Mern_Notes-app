const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("express");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username) {
    return res
      .status(400)
      .json({ error: true, message: "User Name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    return res.status(400).json({ error: true, message: "User already exist" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  await user.save();

  const accessToken = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "3000m",
  });

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successfull",
  });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        error: true,
        message: "Email is requred",
      });
    }

    if (!password) {
      return res
        .status(400)
        .json({ error: true, message: "Password is required" });
    }
    const userInfo = await User.findOne({ email: email });

    if (!userInfo) {
      return res
        .status(400)
        .json({ error: true, message: "User Doesn't Exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, userInfo.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: true, message: "Invalid Password" });
    }

    const accessToken = jwt.sign({ user: userInfo }, process.env.JWT_SECRET, {
      expiresIn: "3000m",
    });

    return res.json({
      error: false,
      user: userInfo,
      accessToken,
      message: "Login Successful",
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  const { user } = req.user;

  try {
    const isUser = await User.findOne({ _id: user._id });
    if (!isUser) {
      return res.status(401).json({
        error: true,
        message: "User Not found",
      });
    }

    return res.status(200).json({
      error: null,
      user: isUser,
      message: "User Found",
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Internal server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
