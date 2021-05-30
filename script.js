const inquirer = require("inquirer");
const fs = require("fs");


inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "What is your location?",
    },
    {
      type: "input",
      name: "bio",
      message: "What is your bio?",
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub?",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn?",
    },
  ])
  .then((response) => {
    console.log(response);
    const html = generateHTML(response);
    
    const filename = `${response.name.toLowerCase().split(" ").join("")}.html`;
    fs.writeFile(filename, html, (err) =>
      err ? console.log(err) : console.log("Successfully created .html!")
    );
  });

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
                  <h3>${answers.title}</h3>
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
  
      <script src="script.js"></script>
    </body>
  </html>
  `;

  return html;
};
