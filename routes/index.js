const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blogController");

router.get("/", blogController.getHomePage);

module.exports = router;
