const inquirer = require("inquirer");
const fs = require("fs")
// const axios = require("axios")
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile);

// const { author, title, description, installation, usage, license, contributing, tests, picture, email, githubUserName } = answers;

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What would you like to title this project?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your name?",
            name: "author"
        },
        {
            type: "input",
            message: "How would you describe this project?",
            name: "description"
        },
        {
            type: "input",
            message: "What installation is needed?",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you use your project?",
            name: "usage"
        },
        {
            type: "list",
            message: "What license would you like to add?",
            name: "license",
            choices: [
                "MIT",
                "ISC",
                "GPL",
                "None"
            ]
        },
        {
            type: "input",
            message: "Any contributors?",
            name: "contributing"
        },
        {
            type: "confirm",
            message: "Any testing done?",
            name: "test"
        },
        {
            type: "input",
            message: "What is your github email?",
            name: "questions"
        },
        {
            type: "input",
            message: "Would you like to add a profile picture?",
            name: "questions"
        },
    ])
};

function generateReadMe(answers) {
    console.log(answers)
    return `
    #### Table
    * Table of Contents
    * [Author](#author)
    * [title](#title)
    * [description](#description)
    * [installation](#installation)
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
        * Would you like to add a profile picture?
        * What is your GitHub email?
    
    #### Author
​
    The author of this project is: ${answers.author}
​
    #### Title
​
    ${answers.title}
​
    #### Decription
​
    ${answers.description}
​
    #### Installation
​
    Install the project by doing the following: ${answers.installation}
​
    #### Usage
​
    Usage: ${answers.usage}
​
    #### License
​
    License: ${answers.license}
​
    #### Contributing
​
    Contributers: ${answers.contributing}
​
    #### Tests
​
    Tests: ${answers.tests}
​
    #### Picture
​
    ${answers.picture === "Yes" ? `<img>![profile_image](${answers.avatar})</img>` : ""}
​
    #### Email
​
    ${answers.email === "Yes" ? `${answers.email}` : ""}`
}
    

async function init() {
    console.log("readMe")
    try {
      const answers = await promptUser();
  
      const readMe = generateReadMe(answers);
  
      await writeFileAsync("readme.md", readMe);
  
      console.log("Successfully wrote to readMe.md");
    } catch(err) {
      console.log(err);
    }
  }

init();
