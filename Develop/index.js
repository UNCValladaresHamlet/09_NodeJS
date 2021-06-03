// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'title',
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
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "No License Assigned"],
},
{
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
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
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Successfully created file!'))
        // console.log('fileName?!?!?!?!?!?!?!?!!!!?!:', fileName)
        // console.log('data?!?!?!??!?!?!/!?!!!?!?!!?:', data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data));
        // console.log('data?!?!?!??!?!?!/!?!/!!?!?!!?:', data)
    });
}
// Function call to initialize app
init();
