// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer  = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your name?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        writeToFile('README.md', generateMarkdown(responses))
    })
}

// Function call to initialize app
init();
