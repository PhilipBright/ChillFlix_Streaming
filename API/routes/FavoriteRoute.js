const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/FavoriteController");

router.post("/favorite", favoriteController.addToLikedMovies);

module.exports = router;
