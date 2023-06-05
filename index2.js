const fs = require('fs');

//make index.html(first arg), then use what's done in [2] index of process.argv (second arg) to declare data, then display error via console.error method
fs.appendFile('index.html', `${process.argv[2]}\n`, (err) =>
  err ? console.error(err) : console.log('Created index file!')
);

const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'personname',
    },

    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },

    {
      type: 'input',
      message: 'Please link your Bio',
      name: 'bio',
    },
     
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github',
    }, 

    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin',
    },
  ])
  .then((response) =>
    
      ? console.log('Success!')
      : console.log('Unsuccessful!')
    );
