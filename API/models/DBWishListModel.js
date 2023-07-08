const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User', // Assuming you have a User model defined
  //   required: true,
  // },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie', // Assuming you have a Movie model defined
      required: true,
    },
  ],
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
