// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const LICENSES = {
  "MIT": {
      "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "link": "https://opensource.org/licenses/MIT",
      "notice": "This project is licensed under the MIT License."
  },
  "GPLv3": {
      "badge": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      "link": "https://www.gnu.org/licenses/gpl-3.0",
      "notice": "This project is licensed under the GPLv3 License."
  },
  "Apache 2.0": {
      "badge": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "link": "https://opensource.org/licenses/Apache-2.0",
      "notice": "This project is licensed under the Apache 2.0 License."
  }
};

function renderLicenseBadge(license) {
  return license && LICENSES[license] ? LICENSES[license].badge : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return license && LICENSES[license] ? LICENSES[license].link : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license && LICENSES[license] ? LICENSES[license].notice : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions about the project, you can reach me at [${data.email}](mailto:${data.email}) or visit my [GitHub profile](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
