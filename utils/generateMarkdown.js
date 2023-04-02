// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  switch (license) {
    case "MIT License":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache License 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
  }

  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Tests](#tests)
4. [Contributing](#contributing)
5. [License](#license)
6. [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Tests
${data.test}
## Contributing
${data.contribution}
## License
${data.license}
## Questions
If you have any questions, please reachout via [GitHub](https://github.com/${data.github}/) or via email at [${data.email}](mailto:${data.email}).`;
}

module.exports = generateMarkdown;
