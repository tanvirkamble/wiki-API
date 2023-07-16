// this file is responsible for initializing the database and performing operations such as deleting existing data and creating new documents based on a JSON file.

//use node createDB.js to run the file

require('dotenv').config();
const connectdb = require('../db/connectDB');
const Articles = require('../models/articleSchema');

const articleJSON = require('../data/articles');

const start = async () => {
  try {
    await connectdb(process.env.MONGODB_URL);

    //await Articles.deleteMany().then(console.log('articles are deleted'));

    const newArticles = await Articles.create(articleJSON)
      .then(() => {
        console.log('New articles are created');
      })
      .catch((err) => {
        console.log('article JSON file connection failed');
        console.log(err);
      });

    console.log(newArticles);
  } catch (error) {
    console.log('Error occurred while initializing the database');
    console.log(error);
  } finally {
    // Close the database connection
    process.exit();
  }
};

start();
