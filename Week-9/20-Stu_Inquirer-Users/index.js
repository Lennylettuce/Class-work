const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'personname',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            name: 'languages',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
        },
        {
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            name: 'comms',
            choices: ['email', 'phone', '']
        },
    ])
    .then(data => {
        const fileName = `${data.name.toLowerCase()}.json`;
    
        fs.writeFile(fileName, JSON.stringify(data), null, '/t', err => {
            err ? console.error(err) : console.log('File written successfullly');
        })
    })
    //get solution tomorrow