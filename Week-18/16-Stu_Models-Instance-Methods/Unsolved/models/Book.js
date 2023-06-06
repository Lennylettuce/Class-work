const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }
});
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    const discount = this.price - (this.price * .5);
    console.log(
        `The book you selected, ${this.title}, is ${discount}!`
    );
};
// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);
// TODO: Create a new instance of the model
const discountInstance = new Book({ 
    title: 'book title',
    author: 'author',
    price: 10
});
// TODO: Call the custom instance method on the instance
//then call function for this 
discountInstance.getDiscount();

module.exports = Book;
