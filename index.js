//required packages
const inquirer = require('inquirer');
const fs = require('fs');

//path constants??
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//whats this suppose to do??
//required module exports
//const generateTeam = require("./src/template.js")

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//creates employee array
let engineerArr = [
  {name:'john', id:2376,email:'email.com'},
  {name:'zoey', id:4226,email:'jess.com'}
];

function generateEngineers(){
let engineers='';
for (let i=0; i<2; i++){
  let card=`<p>${engineerArr[i].name}<p><p>${engineerArr[i].id}<p><p>${engineerArr[i].email}<p>`;
  engineers=engineers+card 
}
return engineers
}
//makes index.html
const generatePage = () => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
    </head>
  
    <body>
    ${generateEngineers()}
      <h1>Hello</h1>
      <h2><a href="https://github.com/">Github</a></h2>
    </body>
    </html>
    `;
  };

  fs.writeFile('./dist/index.html', generatePage(), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });