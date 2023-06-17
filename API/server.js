const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoute');
const app = express();
const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 15; // Increase the limit to 15 or an appropriate value

// Rest of your code

app.use(cors());
app.use('/api/user', userRoutes);

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

