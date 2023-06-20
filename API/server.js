const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const favoriteRoutes = require('./routes/FavoriteRoute');
const registerRoutes = require('./routes/RegisterRoute')
const app = express();



app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', favoriteRoutes);
app.use('/api/user', registerRoutes);

mongoose.connect('mongodb+srv://Philip:Myanmar2023@cluster0.cze7alr.mongodb.net/', {
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

