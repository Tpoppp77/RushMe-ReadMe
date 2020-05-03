const inquirer = require("inquirer");

inquirer
.prompt([
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
.then()
.catch();