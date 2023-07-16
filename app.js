const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
require('dotenv').config(); //.env file

const mongoose = require('mongoose');

// Set view engine to EJS
app.set('view engine', 'ejs');

// Body parsing middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import routes
const articlesRoutes = require('./routes/articles');
const homeRoutes = require('./routes/home');

// Use the articlesRoutes middleware
app.use('/articles', articlesRoutes);
app.use('/', homeRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(3000, function () {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
