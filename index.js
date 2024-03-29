const fs = require("node:fs");
var inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

const { writeFile } = require('fs').promises;
 
const promptUser = () => {
    return inquirer.prompt([
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },   
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project in detail",
    },
    {
        type: "input",
        name: "link",
        message: "Please enter a link to your deployed application",
    },
    {
        type: "input",
        name: "instructions",
        message: "Please explain any installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message:"State the languages or dependencies associated with this project.",
    },
    {
        type: "input",
        name: "guidelines",
        message: "Please add any contribution guidelines",
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
    ]);
};


const init = () => {
    promptUser()
      
      .then((answers) => writeFile('./dist/README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created README file'))
      .catch((err) => console.error(err));
  };

init();
