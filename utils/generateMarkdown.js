// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // let lBadge;
  const licObj = {};
  if(license === "MIT") {
    licObj['lBadge'] = "https://img.shields.io/badge/license-MIT-brightgreen.svg";
    licObj['lLink'] = "https://choosealicense.com/licenses/mit/";
  }
  else if(license === "Apache 2.0") {
    licObj['lBadge'] = "https://img.shields.io/badge/license-Apache%202.0-blue.svg";
    licObj['lLink'] = "https://choosealicense.com/licenses/apache-2.0/";
  }
  else if(license === "GPL 3.0") {
    licObj['lBadge'] = "https://img.shields.io/badge/license-GPL%203.0-red.svg";
    licObj['lLink'] = "https://choosealicense.com/licenses/gpl-3.0/";
  }
  else if(license === "BSL 1") {
    licObj['lBadge'] = "https://img.shields.io/badge/license-BSL%201-yellow.svg";
    licObj['lLink'] = "https://choosealicense.com/licenses/bsl-1.0/";
  }
  else {
    licObj = {};
  }
  return licObj;
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
  let licenseObj = renderLicenseBadge(data.license);
  // let lLink = renderLicenseLink(data.license);
  // console.log(lBadge);
  return `
  # ${data.title}
    
  ![license](${licenseObj.lBadge})

  ## Table of contents
  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  * [How to contribute](#how-to-contribute)

  * [Tests](#tests)

  * [License](#license)

  * [Contact](#contact)

  ## Description

  ${data.description}
    
  ## Installation
     
  To install and run the application use the following command/s :
      
  * ${data.installation}

  ## Usage

  ${data.repoInfo}
      
  ## How to contribute

  Please feel free to contribute to the project. 
  ${data.repoCont}

  ## Tests

  To run test use following command :

  * ${data.tests}

  ## License

  This project is licensed under the [${data.license}](${licenseObj.lLink}) license.

  ## Contact
  * Email : ${data.emailId}
  * Github User Id : ${data.githubId}
`;
}

module.exports = generateMarkdown;
