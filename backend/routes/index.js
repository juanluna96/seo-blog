const express = require("express");

const router = express.Router();

// import all routes
const blogRoutes = require("./blogs");
const authRoutes = require("./auth");

// routes
router.use(blogRoutes);
router.use(authRoutes);

module.exports = router;
