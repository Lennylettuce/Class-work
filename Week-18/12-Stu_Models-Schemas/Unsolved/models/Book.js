const mongoose = require('mongoose');

// TODO: Add a comment describing the functionality of the code below
  //creates an instance of our book schema, connect with mongoose schema method
    //to create item with date timestamp on access, string data types for title and author, and other info this item has, publisher, etc
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
  //create instance of our Book model and use mongoose model method to title it and add our bookSchema to it
const Book = mongoose.model('Book', bookSchema);
//function for error handling to show in console, used later in create method
const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
  //this 'seeds' the schema with info to fill in the properties the original item has (book schema's properties)

Book.create(
  {
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
  //this create only has info for two properites of the item Book
    //required field both true here
Book.create(
  { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
  //this create only has one info for one property in Book item
    //only has one required, author is missing so its value is null
Book.create({ title: 'Harold and the Purple Crayon' }, (err) =>
  err ? handleError(err) : console.log('Created new document')
);

module.exports = Book;
