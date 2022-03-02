// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?',
                    'Provide a brief description of your project: ',
                    'What are the steps required to install your project?',
                    'Provide instructions for usage: ',
                    'What license does the project have?',
                    'Provide any credits: ',
                    'What is your gitHub Id?',
                    'What is your email id?',
                    'What command should be executed to run the tests?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer
     .prompt([{
         type: "input",
         name: "title",
         message: questions[0],
     },
     {
        type: "input",
        name: "description",
        message: questions[1],
     },
     {
        type: "input",
        name: "installSteps",
        message: questions[2],
     },
     ]);
}

// Function call to initialize app
init();
