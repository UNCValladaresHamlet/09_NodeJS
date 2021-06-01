// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'userName',
    message: 'What is your Github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'projectName',
    message: 'What is your project\'s name?',
},
{
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project title?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose the appropriate license for this project:',
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
},
{
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'What does the user need to know about contributing to the repo',
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
}
    )
}
// Function call to initialize app
init();
