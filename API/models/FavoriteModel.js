const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  likedMovies: Array,
});

const FavoriteMovie = mongoose.model("favoritemovies", userSchema);

module.exports = FavoriteMovie;
