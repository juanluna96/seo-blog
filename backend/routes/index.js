const express = require("express");

const router = express.Router();

// import all routes
const blogRoutes = require("./blogs");

// routes
router.use(blogRoutes);

module.exports = router;
