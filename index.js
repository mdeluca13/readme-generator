// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What is the Description of your Project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the Installation instructions for your Project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the Usage Information for your Project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the Test Instructions of your Project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What are the Contributors of your Project?',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'What License are you using?',
        name: 'license',
        choices: [
            'MIT License', 
            'Apache License 2.0', 
            'GNU General Public License v3.0'
        ],
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your Email Address?',
        name: 'email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Enjoy your README!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
        const projectName = `${data.title.toLowerCase().split(' ').join('')}_README.md`;
        writeToFile(projectName, data)
  });
}

// Function call to initialize app
init();
