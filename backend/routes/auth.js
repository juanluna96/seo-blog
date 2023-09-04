// Auth routes
// Path: backend\routes\auth.js

const express = require("express");
const router = express.Router();

// import controller methods
const {
  signup,
  signin,
  singout,
  requireSignin,
} = require("../controllers/auth");

const { runValidation } = require("../validators");

// validators
const {
  validateSignupRequest,
  validateSigninRequest,
} = require("../validators/auth");

// routes
router.post("/signup", validateSignupRequest, runValidation, signup);
router.post("/signin", validateSigninRequest, runValidation, signin);
router.get("/signout", singout);

// test
router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "you have access to secret page",
  });
});

module.exports = router;
