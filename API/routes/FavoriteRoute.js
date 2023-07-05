const express = require("express");
const router = express.Router();
const { addToLikedMovies,
    getLikedMovies,
   } = require("../controllers/FavoriteController");

router.get("/liked/:email", getLikedMovies);
router.post("/favorite", addToLikedMovies);
// router.put("/remove", removeFromLikedMovies);

module.exports = router;
