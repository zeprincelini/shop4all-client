const bcrypt = require("bcrypt");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    if (!hash) {
      return res.status(403).json("error creating account");
    } else {
      const newUser = {
        name,
        email,
        password: hash,
      };
      const user = await User.create(newUser);
      if (!user) {
        return res.status("401").json({ error: "Registration failed" });
      }
      return res.status("200").json({
        status: "success",
        data: user,
        message: "Registration successful",
      });
    }
  } catch (err) {
    return res.status(403).json(err.message);
  }
};

const loginUser = async (req, res) => {};

module.exports = {
  createUser,
};
