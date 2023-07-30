// Auth routes
// Path: backend\routes\auth.js

const express = require("express");
const router = express.Router();

// import controller methods
const { auth } = require("../controllers/auth");

// routes
router.post("/auth", auth);

module.exports = router;
