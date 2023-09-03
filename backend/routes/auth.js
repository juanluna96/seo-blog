// Auth routes
// Path: backend\routes\auth.js

const express = require("express");
const router = express.Router();

// import controller methods
const { signup } = require("../controllers/auth");

const { runValidation } = require("../validators");

// validators
const { validateSignupRequest } = require("../validators/auth");

// routes
router.post("/signup", validateSignupRequest, runValidation, signup);

module.exports = router;
