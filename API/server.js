const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const favoriteRoutes = require('./routes/FavoriteRoute');
const registerRoutes = require('./routes/RegisterRoute')
const addMovieRoutes = require('./routes/MovieRoute')
const wishlistRoutes  = require('./routes/DBWishListRoute')
const app = express();
// Set the destination folder



app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', favoriteRoutes);
app.use('/api/user', registerRoutes);
app.use('/api/user', addMovieRoutes);
app.use('/api/user', wishlistRoutes )
app.use('/uploads', express.static('public/uploads'));



mongoose.connect('mongodb+srv://Philip:Myanmar2023@cluster0.cze7alr.mongodb.net/StreamingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
