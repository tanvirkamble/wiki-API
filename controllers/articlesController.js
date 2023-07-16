const express = require('express');
const Articles = require('../models/articleSchema');
const path = require('path');
const fs = require('fs');

//request targeting ALL articles

const getAllArticles = async (req, res) => {
  Articles.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send('Internal Server Error');
      console.error(err);
    });
};

const createArticle = async (req, res) => {
  //console.log(req.query.title);
  //console.log(req.query.content);

  const newArticle = await Articles.create({
    title: req.query.title,
    content: req.query.content,
  });
  res.send(newArticle);
};

const deleteAllArticles = async (req, res) => {
  Articles.deleteMany()
    .then((result) => {
      res.send('successfully deleted all articles');
      console.log(result);
    })
    .catch((err) => {
      res.status(500).send('Internal Server Error');
      console.log('error spotted while deleting articles');
      console.error(err);
    });
};

//request targeting specific articles

const getArticleByTitle = async (req, res) => {
  Articles.findOne({ title: req.params.articleTitle })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.send('no articles with this title is available');
      }
    })
    .catch((err) => {
      res.status(500).send('Internal Server Error');
      console.error(err);
    });
};

const updateArticleByTitle_put = async (req, res) => {
  const { title, content } = req.query;

  Articles.updateOne({ title: req.params.articleTitle }, { title, content })
    .then((result) => {
      if (result) {
        res.send(' successfully updated article');
        console.log(result);
      } else {
        res.send(' cannot update article');
      }
    })
    .catch((err) => {
      res.status(500).send('Internal Server Error');
      console.log('there is and error while updating this specific article');
      console.error(err);
    });
};

const updateArticleByTitle_patch = async (req, res) => {
  Articles.updateOne({ title: req.params.articleTitle }, { $set: req.query })
    .then((result) => {
      if (result) {
        res.send(' successfully updated article');
        console.log(result);
      } else {
        res.send(' cannot update article');
      }
    })
    .catch((err) => {
      res.status(500).send('Internal Server Error');
      console.log('there is and error while updating this specific article');
      console.error(err);
    });
};

const deleteArticleByTitle = async (req, res) => {
  Articles.deleteOne({ title: req.params.articleTitle })
    .then((result) => {
      res.send('successfully deleted this specific article');
      console.log(result);
    })
    .catch((err) => {
      res.status(500).send('Internal Server Error');
      console.log('error spotted while deleting articles');
      console.error(err);
    });
};

module.exports = {
  getAllArticles,
  createArticle,
  deleteAllArticles,
  getArticleByTitle,
  updateArticleByTitle_put,
  updateArticleByTitle_patch,
  deleteArticleByTitle,
};
