// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Link to HTML page creation based off of user input
const teamProfiles = require('./util/teamProfiles.html');

// Team Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

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
      name: "managerName",
      message: "Input team managers name.",
    },
    {
      type: "input",
      name: "managerId",
      message: "Input team managers employee ID.",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "Input team managers office number.",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Input team managers e-mail.",
    },
    {
      type: "input",
      name: "managerGitHub",
      message: "Input team managers GitHub account.",
      },
  ]
//   .then((response) => {
//     console.log(response);
//     const html = generateHTML(response);

//     const filename = `${response.name.toLowerCase().split(" ").join("")}.html`;
//     fs.writeFile(filename, html, (err) =>
//       err ? console.log(err) : console.log("Successfully created .html!")
//     );
//   });

function writeFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => {
    if (err) {
      return console.log(err)
    } else { 
      console.log("Successfully wrote teamProfiles.html")
    }
  });
}

// Function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then(function (answers) {
    writeFile("teamProfiles.html", teamProfiles(answers));
    console.log(answers)
  });
}

// Function call to initialize app
init();

function teamProfiles(answers) {
    return `<!DOCTYPE html>
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
                  <h2>${answers.managerName}</h2>
                  <h3>Manager</h3>
                  <br>
                  <ul>
                      <li>ID: ${answers.managerId}</li>
                      <li>Office Number: ${answers.managerOffice}</li>
                      <li>E-mail: ${answers.managerEmail}</li>
                      <li>GitHub: ${answers.managerGitHub}</li>
                  </ul>
              </div>
          </div>
  
          <div class="card">
              <div class="content">
                  <h2>${answers.name}</h2>
                  <h3>${answers.title}</h3>
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
                  <h3>${answers.title}</h3>
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
                  <h3>${answers.title}</h3>
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
                  <h3>${answers.title}</h3>
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
                  <h3>${answers.title}</h3>
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

};

module.exports = teamProfiles;