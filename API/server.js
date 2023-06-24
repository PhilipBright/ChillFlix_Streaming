const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const favoriteRoutes = require('./routes/FavoriteRoute');
const registerRoutes = require('./routes/RegisterRoute')
const addMovieRoutes = require('./routes/MovieRoute')
const app = express();


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', favoriteRoutes);
app.use('/api/user', registerRoutes);


app.use('/api/user', addMovieRoutes);

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

