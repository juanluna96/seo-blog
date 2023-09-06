const User = require("../models/User");
const shortid = require("shortid");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt");

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.status(400).json({
          error: "User already registered",
        });
      }

      const username = shortid.generate();
      const profile = `${process.env.CLIENT_URL}/profile/${username}`;

      const newUser = new User({ name, email, password, profile, username });
      return newUser.save();
    })
    .then(() => {
      res.json({
        message: "Signup success! Please signin.",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error: error.message, // Send the error message
      });
    });
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup.",
      });
    }

    // Authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match.",
      });
    }

    // Generate a token and send it to the client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, role } = user;
    return res.json({
      token,
      user: { _id, username, name, email, role },
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message, // Send the error message
    });
  }
};

exports.singout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout success",
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
