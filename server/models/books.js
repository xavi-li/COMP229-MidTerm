/* 
  File Name:     /models/books.js
  Student Name:  Yuen Kwan LI
  Student ID:    301228849
  Date:          1-MAR-2023 
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
