/* 
  File Name:     /routes/index.js
  Student Name:  Yuen Kwan LI
  Student ID:    301228849
  Date:          1-MAR-2023 
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
