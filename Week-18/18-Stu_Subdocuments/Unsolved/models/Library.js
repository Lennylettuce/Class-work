const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  price: Number
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);
// TODO: Create a new instance of the model including the subdocuments
const bookData = [ 
  { title: 'first book', author: 'author1', price: 10},
  { title: 'second book', author: 'anon', price: 12},
];

Library 
  .create({ name: 'Barnes n Nobel', books: bookData})
  .then(data => console.log(data))
  .catch(err => console.log(err));
module.exports = Library;
