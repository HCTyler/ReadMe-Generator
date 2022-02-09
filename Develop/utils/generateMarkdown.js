// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![Github License]((https://img.shields.io/badge/license-${license}-blue.svg))`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    return `\n* [License](#license)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
This project is licensed under the ${license} license.`
  }
  return ""
}

function renderTableOfContent(tcontent){
  if(tcontent !=="No") {
    return `## Table of Content
    
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
${renderLicenseLink}

`
  }
  return ""
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
 
## Description

${data.description}

${renderTableOfContent(data.tcontent)}

## Installation

To install necessary dependencies for this project, run the following command:

> ${data.installation}

## Usage

${data.usage}

## Credits

${data.collaborators}

${renderLicenseSection(data.license)}

## Questions

If you have any other questions about the repo, contact me at ${data.email.com}. You can find more of my work at[${data.github}](https://github.com/${data.guthub})



`;
}

module.exports = generateMarkdown;
