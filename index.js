//required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//creates employee array
let teamArray = [];

function initApp (){
  buildTeam();
}

function buildTeam() {
  inquirer.prompt([{
    type: "list",
    message: "What type of employee role would you like to add to your team?",
    name: "rolePrompt",
    choices: ["Manager", "Engineer", "Intern", "Finish building team."]
  }]).then(function (userInput) {
    switch (userInput.rolePrompt) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        generateHTML();
    }
  })
}


// Questions array for all employees
function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?"
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's ID?"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email?"
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.mamagerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    buildTeam();
  });
}

function addEngineer() {
  inquirer.prompt([

    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID?"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email?"
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?"
    },
  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamArray.push(engineer);
    buildTeam();
  });
}

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's ID?" 
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email?"
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the intern's school name?"
    }
  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArray.push(intern);
    buildTeam();
  });

}

function generateHTML (){
    fs.writeFile('./dist/index.html', generatePage(), err => {
      if (err) throw err;
    // Success message
      console.log("Look in 'dist' folder! for index.HTML!");
    });
  }
  // Function call to initialize app
  initApp();
