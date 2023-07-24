// Blog routes
// Path: backend\routes\blogs.js

const express = require("express");
const router = express.Router();

// import controller methods
const { list } = require("../controllers/blogs");

// routes
router.get("/blogs", list);

module.exports = router;
