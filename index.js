// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
            type: "input",
            name: "title",
            message: 'What is the title of your project?',
        },
        {
            type: "input",
            name: "description",
            message: 'Provide a brief description of your project: ',
        },
        {
            type: "rawlist",
            name: "license",
            message: 'What license does the project have?',
            choices : ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3','None']
        },
        {
            type: "input",
            name: "installation",
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
        },
        {
            type: "input",
            name: "githubId",
            message: 'What is your gitHub username?',
        },
        {
            type: "input",
            name: "emailId",
            message: 'What is your email id?',
        },
        {
            type: "input",
            name: "tests",
            message: 'What command should be executed to run the tests?',
            default: 'npm test',
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
     .prompt(questions);
}

// Function call to initialize app
init();
