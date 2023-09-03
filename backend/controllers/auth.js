const User = require("../models/User");
const shortid = require("shortid");

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        error: "User already registered",
      });
    }

    const username = shortid.generate();
    const profile = `${process.env.CLIENT_URL}/profile/${username}`;

    const newUser = new User({ name, email, password, profile, username });
    newUser.save((error, success) => {
      if (error) {
        return res.status(400).json({
          error: error,
        });
      }
      res.json({
        message: "Signup success! Please signin.",
      });
    });
  });
};
