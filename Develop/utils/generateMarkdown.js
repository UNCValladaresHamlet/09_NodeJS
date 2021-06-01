// WROTE FUNCTION
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
// if (license == "No License Assigned") {
//   return "";
// } else {
//   return`## 
//   ![${license}](https://img.shields.io/badge/license-${license}-blue)`;   
// }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "No License Assigned") {
    return "";
  } else {
    return `## License
      This project is licensed under the ${license} license`
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

# Project Title
${data.title}
## Description
${data.description}
 ## Table of Contents
 * [Installation Instructions](https://github.com/UNCValladaresHamlet/09_NodeJS/blob/main/Develop/README.md#installation)
 * [Usage Information](https://github.com/UNCValladaresHamlet/09_NodeJS/blob/main/Develop/README.md#usage)
 * [Contribution Guidelines](https://github.com/UNCValladaresHamlet/09_NodeJS/blob/main/Develop/README.md#contributing)
 * [Test Instructions](https://github.com/UNCValladaresHamlet/09_NodeJS/blob/main/Develop/README.md#tests)
 * [Questions](https://github.com/UNCValladaresHamlet/09_NodeJS/blob/main/Develop/README.md#questions)
## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions, you can contact me directly at ${data.email} . Click here to check out my Github profile https://github.com/${data.github} .

${renderLicenseSection(data.license)}

`;

}

module.exports = generateMarkdown;
