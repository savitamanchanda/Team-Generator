const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')


const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const employees = [];

const generateManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: "Please enter team manager's name",
            name: 'name',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid name is required.");
                }
                return true;
            }   
        },
        {
            type: 'input',
            message: "Please enter team manager's employee ID",
            name: 'id',
            validate: function (answer) {
                if (answer <= 0) {
                    return console.log("A valid employee ID is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter team manager's email address",
            name: 'email',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid email address is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the manager's office number",
            name: 'officeNum',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid office number is required.");
                }
                return true;
            }
        }, 
        {
            type: 'confirm',
            name: 'confirmMore',
            message: 'Would you like to add more members to the team?',
            default: true,
        }
    ])
    .then(newManager => {
        const { name, id, email, officeNum } = newManager;
        const createManager = new Manager (name, id, email, officeNum)

        employees.push(createManager);
        console.log('Thanks for adding a manager for the team: ' + name)
    })
};

function generateEmployee() {
    return inquirer.prompt([
        {
            type: 'list',
            message: "Please select the type of member to add to the team",
            choices: ['Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: "Please enter the employee's name",
            name: 'name',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid name is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the employee ID",
            name: 'id',
            validate: function (answer) {
                if (answer <= 0) {
                    return console.log("A valid employee ID is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the employee's email address",
            name: 'email',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid email address is required.");
                }
                return true;
            }
        },   
        {
            type: 'input',
            message: "Please enter the employee's GitHub username",
            name: 'github',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid GitHub is required.");
                }
                return true;
            },
            when: (answers) => answers.role === "Engineer", 
        },
        {
            type: 'input',
            message: "Please enter the intern's school name.",
            name: 'school',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid school is required.");
                }
                return true;
            },
            when: (answers) => answers.role === "Intern" 
        },
        {
            type: "confirm",
            name: "confirmEmployee",
            message: "Would you like to add more members to the team?", 
            default: false,
          },
    ])
    .then((newEmployee) => {

        let { name, id, email, role, github, school, confirmEmployee } = newEmployee;

        let employee;
        if(role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log('Thanks for adding an engineer to the team: ' + name);

        } else if(role === 'Intern') {
            employee = new Intern(name, id, email, school);
            console.log('Thanks for adding an intern to the team: ' + name);
        }

        employees.push(employee);

        if (confirmEmployee) {
            return generateEmployee(employee);
        } else {
            return employees;
        }
    });
}


const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        err ? console.log(err) : console.log("Success! Your index.html page is ready in the dist folder!")
    });
};

generateManager()
.then(generateEmployee)
.then((employees) => {
    return generateHTML(employees);
})
.then((file) => {
    return writeFile(file);
})
.catch((err) => {
    console.log(err)
});