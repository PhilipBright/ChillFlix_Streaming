// const Wishlist = require('../models/DBWishListModel');
// const Movie = require('../models/MovieModel');

// module.exports.addMovieToWishlist = async (req, res) => {
//   const { movieId } = req.body;
//   const userId = req.user.id; // Assuming you have the user ID available in the req.user object

//   try {
//     // Check if the movie and wishlist exist
//     const movie = await Movie.findById(movieId);
//     const wishlist = await Wishlist.findOne({ user: userId });

//     if (!movie) {
//       return res.status(404).json({ message: 'Movie not found' });
//     }

//     if (!wishlist) {
//       // If the wishlist doesn't exist, create a new wishlist for the user
//       const newWishlist = new Wishlist({
//         user: userId,
//         movies: [movieId],
//       });

//       await newWishlist.save();
//     } else {
//       // If the wishlist already exists, add the movie to the existing wishlist
//       wishlist.movies.push(movieId);
//       await wishlist.save();
//     }


//     res.status(201).json({ message: 'Movie added to wishlist' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to add movie to wishlist' });
//   }
// };
const Wishlist = require('../models/DBWishListModel');
const Movie = require('../models/MovieModel');

module.exports.addMovieToWishlist = async (req, res) => {
  const { movieId } = req.body;

  try {
    // Check if the movie and wishlist exist
    const movie = await Movie.findById(movieId);
    const wishlist = await Wishlist.findOne();

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    if (!wishlist) {
      // If the wishlist doesn't exist, create a new wishlist
      const newWishlist = new Wishlist({
        movies: [movieId],
      });

      await newWishlist.save();
    } else {
      // If the wishlist already exists, add the movie to the existing wishlist
      wishlist.movies.push(movieId);
      await wishlist.save();
    }

    res.status(201).json({ message: 'Movie added to wishlist' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add movie to wishlist' });
  }
};



exports.getMovieById = async (req, res) => {
    const { id } = req.params;
  
    if (id === 'wishlist') {
      try {
        const wishlist = await Wishlist.findOne({});
        if (!wishlist) {
          return res.status(404).json({ message: 'Wishlist not found' });
        }
        const wishlistMovies = await Movie.find({ _id: { $in: wishlist.movies } });
        return res.json(wishlistMovies);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to fetch wishlist movies' });
      }
    }
  
    try {
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

  exports.getWishlistMovies = async (req, res) => {
    try {
      // Find the wishlist based on your specific criteria
      const wishlist = await Wishlist.findOne({ user: req.user._id });
  
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found' });
      }
  
      const wishlistMovies = await Movie.find({ _id: { $in: wishlist.movies } });
  
      res.json(wishlistMovies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };