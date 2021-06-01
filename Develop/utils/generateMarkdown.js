// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

# Project Title
${data.title}
## Description
${data.description}
 ## Table of Contents
 * [Installation Instructions](#Installation)
 * [Usage Information](#Usage)
 * [Contribution Guidelines](#Contributing)
 * [Test Instructions](#Tests)
 * [Questions](#Questions)
## Installation
${data.install}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.test}
## License
This project is licensed under the (${data.license}) license.
## Questions
If you have any questions, you can contact me directly at ${data.email} . Check out my other github projects https://github.com/${data.gitHub} .`;
}

module.exports = generateMarkdown;
