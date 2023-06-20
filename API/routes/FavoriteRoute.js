

const { addToLikedMovies } = require("../controllers/FavoriteController")

const router = require("express").Router()
router.post("/favorite", addToLikedMovies)

module.exports = router