const Movie = require('../models/MovieModel');
const { isValidObjectId } = require('mongoose');


// module.exports.addMovie = async (req, res) => {
//   try {
   
//     const {  movieName, company, description, genre, date,poster,  trailer } = req.body;

  
//     const movie = new Movie({
      
//       movieName,
//       company,
//       description,
//       genre,
//       date,
      
//       poster,
//       trailer
//     });

  
//     const savedMovie = await movie.save();

 
//     res.status(201).json(savedMovie);
//   } catch (error) {
    
//     console.error(error);
//     res.status(500).json({ error: 'Failed to add the movie' });
//   }
 

// };\
module.exports.addMovie = async (req, res) => {
  try {
    const { movieName, company, overview, genre, date, trailer } = req.body;
    const poster = req.file.filename; // Get the filename of the uploaded poster

    const movie = new Movie({
      movieName,
      company,
      overview,
      genre,
      date,
      poster,
      trailer
    });

    const savedMovie = await movie.save();

    res.status(201).json(savedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add the movie' });
  }
};
module.exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

// exports.getMovieById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const movie = await Movie.findById(id);
//     if (!movie) {
//       return res.status(404).json({ message: 'Movie not found' });
//     }

//     res.json(movie);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
exports.getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid movie ID' });
    }

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

module.exports.deleteMovie = async (req, res) => {
  const movieId = req.params.id;

  try {
    // Find the movie by its ID and remove it from the database
    await Movie.findByIdAndRemove(movieId);

    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete movie' });
  }
};

