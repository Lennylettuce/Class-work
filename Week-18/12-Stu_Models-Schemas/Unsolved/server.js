const express = require('express');
const db = require('./config/connection');
// TODO: Add a comment describing the functionality of the code below
  //creates a book object and connects our models files to this object
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', (req, res) => {
  // TODO: Add a comment describing the functionality of the code below
    //tells our app to use get method to find route /all-books and calls our Book object to method find {all if left blank}
    //and then log the results with a status 200 for connections and an error 500 w/message if there is a server problem
  Book.find({}, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
