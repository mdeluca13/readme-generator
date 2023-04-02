// Variable declaration
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
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
        message: 'Who are the Contributors of your Project?',
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

// Write file function using the generateMarkdown function in the generateMarkdown.js
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Enjoy your README!')
    );
}

// Initializing the function of prompting the questions for user input and calling the writeToFile function to create the readme based on the input provided
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
