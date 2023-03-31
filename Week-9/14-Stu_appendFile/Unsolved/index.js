// TODO: What are we importing?
// we are importing the library of methods to use in our javascript code
// make a variable to hold onto the method library
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
//each argument: first is name of file being appended (created in this case its new to our log)
//second argument looks at the third item in index of process.argv and then create a new line for the error 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // this operator checks for error(last argument) and if its true it'll log the error and if false it logs the message to terminal
  err ? console.error(err) : console.log('Commit logged!')
);
// a ternary operator is is an inline equation for checking conditions given
//so the first item inline is the condition itself, then after the ? or checkpoint it has options for true and false output
// ternary operator is shorthand for writing an if statment to test a condition and the two that follow the ?
// are the options for true/false