const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below

/*
router.get('/', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const bookData = await Book.findAll();

  // Return the bookData promise inside of the JSON response
  return res.json(bookData);
});*/



const seedDatabase = async () => {
  //dryer code instead of then/catch hell
  //seq.sync necessary to sync with this 
  await sequelize.sync({  force: true });
  
  await  Book.bulkCreate(bookSeedData);

  await Library.bulkCreate(librarySeedData);
       
  //look this up in docs
  process.exit(0);
};

seedDatabase();
