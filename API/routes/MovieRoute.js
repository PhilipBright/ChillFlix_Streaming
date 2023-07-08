const express = require('express');
const router = express.Router();
const multer = require('multer');
const MovieController = require('../controllers/MovieController');
const Movie = require('../models/MovieModel');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
  },
});
const upload = multer({ storage });

router.post('/addMovie', upload.single('poster'), MovieController.addMovie);
router.get('/movies/db', MovieController.getAllMovies);
router.get('/:id', MovieController.getMovieById);

// Fetch movie details by ID
router.get('/movies/db/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await Movie.findOne({ _id: movieId });

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
