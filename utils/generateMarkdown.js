// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let lBadge;
  if(license === "MIT") {
    lBadge = "https://img.shields.io/badge/license-MIT-brightgreen.svg";
  }
  else if(license === "Apache 2.0") {
    lBadge = "https://img.shields.io/badge/license-Apache%202.0-blue.svg";
  }
  else if(license === "GPL 3.0") {
    lBadge = "https://img.shields.io/badge/license-GPL%203.0-red.svg";
  }
  else if(license === "BSL 1") {
    lBadge = "https://img.shields.io/badge/license-BSL%201-yellow.svg";
  }
  else {
    lBadge = '';
  }
  return lBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let lBadge = renderLicenseBadge(data.license);
  // let lLink = renderLicenseLink(data.license);
  // console.log(lBadge);
  return `
  # ${data.title}
    
  ![license](${lBadge})

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Screenshots](#screenshots)
  * [Built with](#built-with)
  * [How it works](#how-it-works)
  * [Application URL](#application-url)

  ## Description

  ${data.description}
    
  ## Installation
     
  To install and run the application use the following command/s :
      
  * ${data.installation}

  ## Usage
  
  ## Screenshots

  ## How it works
    
  ## How to contribute

  ## Tests

  ## Contact
`;
}

module.exports = generateMarkdown;
