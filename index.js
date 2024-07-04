// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const LICENSES = {
    "MIT": {
        "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "notice": "This project is licensed under the MIT License."
    },
    "GPLv3": {
        "badge": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        "notice": "This project is licensed under the GPLv3 License."
    },
    "Apache 2.0": {
        "badge": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "notice": "This project is licensed under the Apache 2.0 License."
    }
};
// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'Provide installation instructions:' },
    { type: 'input', name: 'usage', message: 'Provide usage information:' },
    { type: 'input', name: 'contributing', message: 'Provide contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license for your project:', choices: Object.keys(LICENSES) },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

function generateReadme(data) {
    return `# ${data.title}

${LICENSES[data.license].badge}

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
${LICENSES[data.license].notice}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the project, you can reach me at [${data.email}](mailto:${data.email}) or visit my [GitHub profile](https://github.com/${data.github}).
`;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    writeToFile('README.md', readmeContent);
});
}

// Function call to initialize app
init();
