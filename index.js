const fs = require("node:fs");
var inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

const { writeFile } = require('fs').promises;
 
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    // {
    //     type: "input",
    //     name: "title",
    //     message: "Please name your Project.",
    // },
    // {
    //     type: "input",
    //     name: "description",
    //     message: "Please describe the purpose and functionality of this project.",
    // },
    // {
    //     type: "input",
    //     name: "link",
    //     message: "Please provide a URL where a user can access your deployed application."
    // },
    // {
    //     type: 'input',
    //     name: 'linkedin',
    //     message: 'Enter your LinkedIn URL',
    // },
    // {
    //     type: 'input',
    //     name: 'Github',
    //     message: 'Enter your Github URL',
    // },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "usage",
        message:"State the languages or technologies associated with this project.",
    },
    {                                         
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
    },
    ]);
};

// TODO: Create a function to write README file


// writeToFile()
// TODO: Create a function to initialize app

const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('./dist/README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created README file'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app

init();
