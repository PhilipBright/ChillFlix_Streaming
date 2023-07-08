const express = require('express');
const router = express.Router();
const WishlistController = require('../controllers/DBWishListController');

router.post('/wishlist/add', WishlistController.addMovieToWishlist);
router.get('/wishlist', WishlistController.getWishlistMovies);

module.exports = router;
