const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const path = require('path')

const generateMarkdown = require('./util/generatemarkdown');




//array of questions for user
const questions = 
    [{

    type: "input",
    message: "What's the title of your project?",
    name: "Title"
    },{
    
    type: "input",
    message: "What is the project about? Give a detailed descripton of your project?",
    name: "Description"
    },{
    
        type: "input",
        message: "Table of content.",
        name: "table of contents"
    
    },{
        type: "input",
        message: "What does the user needs to install for this app to run(ex. inquire, fs..etc?)",
        name: "Installation"
    },{
    
        type: "input",
        message: "How is this app used? Please give instructions!",
        name: "Usage"
    },{
    
    
        type: "input",
        message: "What liscense is being used?(ex. MIT)",
        name: "Liscense"
    
    },{
    
        type: "input",
        message: "Who contributed to this project?:",
        name: "Contribution"
    
    },{
        type: "input",
        message: "What commands are needed to run this app?",
        name: "Tests"
    
    },{
    
        type: "input",
        message: "Contact info for inquiries:",
        name: "contact information"
    
    
    
    },{
    
        type: "input",
        message: "What is your Github username?",
        name: 'Username'
    
    },{
    
    type: "input",
    message: "What is your email address?",
    name: "email"
    
    
    }]
    


    //function that writes the read-me file

function writetofile(filename, data){

   return fs.writeFileSync(path.join(process.cwd(), filename), data )

    }
    
    //function to initialize program
    
    function init(){
    
        inquirer.prompt(questions)
        .then((data) => {
            writetofile("README.md", generateMarkdown({...data}));
            console.log(data);
    
    
        })
    
    
    }
    
    init();