const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (data) => {
  const { name, email, password } = data;

  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

const user = await User.create({
  name,
  email,
  password: hashedPassword,
  role: data.role || 'viewer'
});

  return {
    user,
    token: generateToken(user)
  };
};

exports.loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return {
    user,
    token: generateToken(user)
  };
};