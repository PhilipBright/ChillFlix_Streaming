const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName: String,
    poster: String,
    overview: String,
    genre: String,
    date: Date,
    company: String,
    trailer: String
  });
  module.exports = mongoose.model("Movie",movieSchema);

  