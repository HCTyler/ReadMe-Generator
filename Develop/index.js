// TODO: Include packages needed for this application
const fs= require("fs")
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
        message:"Please write a description of your project."
    },
    {
        type:"list",
        name:"tcontent",
        message:"Would you like to include a Table of Content?",
        choices:["Yes","No"]
    },
    {
        type:"input",
        name:"installation",
        message:"What are the command steps required to install your project?"

    },
    {
        type:"input",
        name:"usage",
        message:"Please provide instructions and examples of use."
    },
    {
        type:"input",
        name:"collaborator",
        message:"List your collaborators or tutorials that were helpful."
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

    fs.writeFile(fileName,data,err => {
        if(err){
            return console.log(err)
        }
        console.log("README file is rendering")
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then((response) =>{
            const markdown = generateMarkdown(response)
            writeToFile("README.md", markdown, (err) =>{
                err ? console.log(err) : console.log("success")
            })
        })
}

// Function call to initialize app
init();
