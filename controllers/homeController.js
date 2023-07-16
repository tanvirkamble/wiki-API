// controllers/homeController.js

const express = require('express');

const homePage = (req, res) => {
  res.send('I am live');
};

module.exports = {
  homePage,
};
