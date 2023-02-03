// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "How can the user run your application?",
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: ["Apache", "MIT", "GNU", "No License"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
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
  inquirer.prompt(questions).then((responses) => {
    writeToFile("README.md", generateMarkdown(responses));
  });
}

// Function call to initialize app
init();
