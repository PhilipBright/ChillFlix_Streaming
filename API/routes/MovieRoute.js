const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/MovieController");

router.post("/addMovie", MovieController.addMovie);

module.exports = router;
