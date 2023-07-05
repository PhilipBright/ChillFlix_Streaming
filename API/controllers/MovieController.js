const Movie = require('../models/MovieModel');


module.exports.addMovie = async (req, res) => {
  try {
   
    const {  movieName, company, description, genre, date,poster,  trailer } = req.body;

  
    const movie = new Movie({
      
      movieName,
      company,
      description,
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