// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License") {
    return "";
  }
  return `![${license}](https://img.shields.io/badge/LICENSE-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License") {
    return "";
  }

  return `* [Installation](#installation)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }

  return `## License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#email)


## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Questions
Here is a link to my Github account:
[Github](github.com/${data.github})

Please feel free to contact me at ${
    data.email
  } with instructions on how to reach me with additional questions



`;
}

module.exports = generateMarkdown;
