// routes/articles.js
const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// Get all articles
router.get('/', articlesController.getAllArticles);

// Create a new article
router.post('/', articlesController.createArticle);

// Delete all articles
router.delete('/', articlesController.deleteAllArticles);

// Get a specific article
router.get('/:articleTitle', articlesController.getArticleByTitle);

// Update a specific article by put
router.put('/:articleTitle', articlesController.updateArticleByTitle_put);

// Update a specific article by patch
router.patch('/:articleTitle', articlesController.updateArticleByTitle_patch);

// delete a specific article
router.delete('/:articleTitle', articlesController.deleteArticleByTitle);

module.exports = router;
