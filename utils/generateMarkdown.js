function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ""
}

function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description

${data.description}
## Deployed Application URL
${data.link}
## Table of Contents
* [Installation Instructions](#installationinstructions)
* [Languages & Dependencies](#languagesanddependencies)
* [Contribution Guidelines](#contributionguidelines)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
## Installation Instructions
${data.instructions}
## Languages & Dependencies
${data.usage}
## Contribution Guidelines
${data.guidelines}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;