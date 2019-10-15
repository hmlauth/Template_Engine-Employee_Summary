// Dependencies
const inquirer = require('inquirer');

// Questions
const {menuQuestions, employeeQuestions, managerQuestions, engineerQuestions, internQuestions} = require('./utils/questions');

// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// HTML
const renderHTML = require('./utils/renderHTML');

// Employees
const finalEmployeeList = [];

// Functions
function init() {
    console.log('\nWelcome!')
    inquirer
    .prompt(employeeQuestions.concat(managerQuestions))
    .then(({name, id, email, officeNumber}) => {
        let manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        promptMenu();
    })
}

function promptMenu() {
    inquirer
    .prompt(menuQuestions)
    .then(({userChoice}) => {
        switch (userChoice) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'None':
                renderHTML(finalEmployeeList);
                break;
        }
    })
}


function promptEngineer() {
    inquirer
    .prompt(employeeQuestions.concat(engineerQuestions))
    .then(({name, id, email, githubUsername}) => {
        let engineer = new Engineer({name, id, email, githubUsername});
        employees.push(engineer);
        promptMenu();
    })
}

function promptIntern() {
    inquirer
    .prompt(employeeQuestions.concat(internQuestions))
    .then(({name, id, email, school})=> {
        let intern = new Intern({name, id, email, school});
        promptMenu();
    })
}
