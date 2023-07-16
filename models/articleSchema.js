const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
const Articles = mongoose.model('article', articleSchema);

module.exports = Articles;
