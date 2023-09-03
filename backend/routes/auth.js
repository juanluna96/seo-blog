// Auth routes
// Path: backend\routes\auth.js

const express = require("express");
const router = express.Router();

// import controller methods
const { signup, signin } = require("../controllers/auth");

const { runValidation } = require("../validators");

// validators
const {
  validateSignupRequest,
  validateSigninRequest,
} = require("../validators/auth");

// routes
router.post("/signup", validateSignupRequest, runValidation, signup);
router.post("/signin", validateSigninRequest, runValidation, signin);

module.exports = router;
