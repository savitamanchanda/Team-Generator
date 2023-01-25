# Team-Generator
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license))

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)


  ## Description

    A command-line application that dynamically generates a team profile from a user's input using the Inquirer package.

    This project was created so that managers can create a webpage that helps them access their team's basic info such as emails and GitHub accounts easily.

[](./assets%3Aimages/screenshot.png)

  ## Installation 

  It is important to have the following programs installed on your computer: 
  * `VS Code` 
  * `Node.js`

  ## Usage 
  
  Steps to generate your own README: 
  * `Git clone` the repo.
  * Run `npm install` in order to install the npm package dependencies as specified in the `package.json`.
  * Invoke the application using `node index.js` command
  * Answer the prompted questions in the command line to generate your team


  ## License 

  https://opensource.org/licenses/MIT

  To learn more about the mit license, click on the URL provided.

  ## Contributors

  N/A

  ## Demonstration 

  Watch [this demo](./assets%3Aimages/Team-Generator.gif) to view the instructions on how to use this Team Generator. 

  ## User Story 

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

  ## Acceptance Criteria 

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

  ## Questions 

  For any questions, Please reach out at: 

  * GitHub: http://github.com/savitamanchanda
  * Email: manchandasavita3@gmail.com

  ## Links to the Deployed Application 

  * The URL of the deployed application - https://savitamanchanda.github.io/Team-Generator/

  * The URL of the GitHub repository - https://github.com/savitamanchanda/Team-Generator

  * [Video Demonstration](./assets%3Aimages/Team-Generator.gif)