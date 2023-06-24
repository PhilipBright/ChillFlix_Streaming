// Import required modules and dependencies
const Movie = require('../models/MovieModel');


module.exports.addMovie = async (req, res) => {
  try {
   
    const { poster, movieName, description, genre, date, company, trailer } = req.body;

  
    const movie = new Movie({
      poster,
      movieName,
      description,
      genre,
      date,
      company,
      trailer
    });

  
    const savedMovie = await movie.save();

 
    res.status(201).json(savedMovie);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: 'Failed to add the movie' });
  }
};
