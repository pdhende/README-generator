// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDwn = require('./utils/generateMarkdown');

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
            choices : ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSL 1','None']
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
        },
        {
            type: "input",
            name: "repoInfo",
            message: 'What should the user need to know about using the repo?'
        },
        {
            type: "input",
            name: "repoCont",
            message: 'What does the user need to know about contributing to the repo?',
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('README file created successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then((data) => {
        //  console.log(markDwn);
       let readMeVal =  markDwn(data);
       writeToFile("README.md", readMeVal);
    //    console.log(readMeVal);
     });
}

// Function call to initialize app
init();
