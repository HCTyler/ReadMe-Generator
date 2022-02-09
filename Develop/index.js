// TODO: Include packages needed for this application
const fs= require("fs")
const path= require("path")
const inquirer= require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name:"github",
        message:"What is your Github username?"
    },
    {
        type:"input",
        name:"email",
        message:"what is your email address?"
    },
    {
        type:"input",
        name:"title",
        message:"What is your project's name?"
    },
    {
        type:"input",
        name:"description",
        messege:"Please write a description of your project"
    },
    {
        type:"list",
        name:"tcontent",
        messege:"Would you like to include a Table of Content?",
        choices:["Yes","No"]
    },
    {
        type:"input",
        name:"installation",
        messege:"What are the command steps required to install your project?"

    },
    {
        type:"input",
        name:"usage",
        messege:"Please provide instructions and examples of use."
    },
    {
        type:"input",
        name:"collaborator",
        messege:"List your collaborators or tutorials that were helpful."
    },
    {
        type:"list",
        name:"license",
        message:"What license(s) should your project have?",
        choices:["MIT","APACHE 2.0","GPL 3.0","None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        console.log("Generating a README file...")
        console.log("... loading...")
        writeToFile("README.md", generateMarkdown)
    })
}

// Function call to initialize app
init();
