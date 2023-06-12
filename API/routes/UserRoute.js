

const { addToLikedMovies } = require("../controllers/UserController")

const router = require("express").Router()
router.post("/add", addToLikedMovies)

module.exports = router