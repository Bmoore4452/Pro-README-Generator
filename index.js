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
    type: "checkbox",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:?",
    choices: [
      "- What was your motivation?",
      "- Why did you build this project?",
      "- What problem does it solve?",
      "- What did you learn?",
    ],
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "What is your name?",
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
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "license",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "badges",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "features",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "contribute",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
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
