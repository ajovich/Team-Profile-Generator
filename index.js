// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Link to HTML page creation based off of user input
const teamProfiles = require('./util/teamProfiles.html');

// Team Profiles
// const Manager = require('lib/Manager.js');
// const Engineer = require('lib/Engineer.js');
// const Employee = require('lib/Employee.js');
// const Intern = require('lib/Intern.js');

// Empty array to push team members into 
const teamArray = [];

// Array of questions
const questions = [
    {
      type: "confirm",
      name: "welcomeMessage",
      message: "Welcome to a team profile generator. Let's start off by entering your team manager's information. Press enter to begin",
    },
    {
      type: "input",
      name: "mame",
      message: "Input team managers name.",
    },
    {
      type: "input",
      name: "mId",
      message: "Input team managers employee ID.",
    },
    {
      type: "input",
      name: "office",
      message: "Input team managers office number.",
    },
    {
      type: "input",
      name: "email",
      message: "Input team managers e-mail.",
    },
    {
      type: "input",
      name: "github",
      message: "Input team managers GitHub account.",
    },
    {
      type: "list",
      name: "role",
      message: "Please choose your team members role.",
      choices: ['Engineer', 'Employee', 'Intern']
    },
    {
      type: "input",
      name: "name",
      message: "Input team members name.",
    },
    {
      type: "input",
      name: "id",
      message: "Input team members employee ID.",
    },
    {
      type: "input",
      name: "email",
      message: "Input team members e-mail.",
    },
    {
      type: "input",
      name: "github",
      message: "Input team members GitHub.",
    },
    {
      type: "confirm",
      name: "addTeamMembers",
      message: "Would you like to add more team members?",
      default: false
    },
    {
      type: "input",
      name: "school",
      message: "Input intern's school.",
    },
  ]

  // TODO: Add an if statement??? Intern school information prompt after adding team members. 

  // Function to write HTML file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
  if (err) {
    return console.log(err)
  } else { 
    console.log("Successfully wrote your team profiles!")
  }
});
}

// Function to initialize app
const init = () => {
inquirer.prompt(questions)
.then(function (data) {
  writeFile("teamProfiles.html", generateHTML(data));
  console.log(data)
});
}

// Function call to initialize app
init();


const generateHTML = function (answers) {
    const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./styles.css"/>
      <title>Team Profiles!</title>
    </head>
    <body>
  
      <div class="titlecontainer">
          <div>
              <h1>Meet the team!</h1>
          </div>
      </div>
      <br><br>
  
      <div class="container">
          <div class="card">
              <div class="content">
                  <h2>${answers.name}</h2>
                  <h3>${answers.role}</h3>
                  <br>
                  <ul>
                      <li>ID: ${answers.id}</li>
                      <li>Office Number: ${answers.office}</li>
                      <li>E-mail: ${answers.email}</li>
                      <li>GitHub: ${answers.github}</li>
                  </ul>
              </div>
          </div>
  
          <div class="card">
              <div class="content">
                  <h2>${answers.name}</h2>
                  <h3>${answers.role}</h3>
                  <br>
                  <ul>
                      <li>ID: ${answers.id}</li>
                      <li>E-mail: ${answers.email}</li>
                      <li>GitHub: ${answers.github}</li>
                  </ul>
              </div>
          </div>
  
          <div class="card">
              <div class="content">
                  <h2>${answers.name}</h2>
                  <h3>${answers.role}</h3>
                  <br>
                  <ul>
                      <li>ID: ${answers.id}</li>
                      <li>E-mail: ${answers.email}</li>
                      <li>GitHub: ${answers.github}</li>
                  </ul>
              </div>
          </div>
  
          <div class="card">
              <div class="content">
                  <h2>${answers.name}</h2>
                  <h3>${answers.role}</h3>
                  <br>
                  <ul>
                      <li>ID: ${answers.id}</li>
                      <li>E-mail: ${answers.email}</li>
                      <li>GitHub: ${answers.github}</li>
                  </ul>
              </div>
          </div>
  
          <div class="card">
              <div class="content">
                  <h2>${answers.name}</h2>
                  <h3>${answers.role}</h3>
                  <br>
                  <ul>
                      <li>ID: ${answers.id}</li>
                      <li>E-mail: ${answers.email}</li>
                      <li>GitHub: ${answers.github}</li>
                  </ul>
              </div>
          </div>
  
          <div class="card">
              <div class="content">
                  <h2>${answers.name}</h2>
                  <h3>${answers.role}</h3>
                  <br>
                  <ul>
                      <li>ID: ${answers.id}</li>
                      <li>E-mail: ${answers.email}</li>
                      <li>GitHub: ${answers.github}</li>
                  </ul>
              </div>
          </div>
  
      </div>
  
    </body>
  </html>
  `;

  return html;
};
