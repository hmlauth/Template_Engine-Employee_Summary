// Dependencies
const inquirer = require('inquirer');

// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Questions
const {
    menuQuestions, 
    employeeQuestions, 
    managerQuestions, 
    engineerQuestions, 
    internQuestions
} = require('./lib/questions');

// HTML
const displayHtml = require('./utils/displayHtml');

// Employees
const employeeList = [];

// Functions
function init() {
    console.log('\nWelcome! Time to build your team:\n')
    inquirer
    .prompt(employeeQuestions.concat(managerQuestions))
    .then(({name, id, email, officeNumber}) => {
        let manager = new Manager(name, id, email, officeNumber);
        employeeList.push(manager);
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
            case 'Exit':
                displayHtml(employeeList);
                break;
        }
    })
}

function promptEngineer() {
    inquirer
    .prompt(employeeQuestions.concat(engineerQuestions))
    .then(({name, id, email, githubUsername}) => {
        let engineer = new Engineer(name, id, email, githubUsername);
        employeeList.push(engineer);
        promptMenu();
    })
}

function promptIntern() {
    inquirer
    .prompt(employeeQuestions.concat(internQuestions))
    .then(({name, id, email, school})=> {
        let intern = new Intern(name, id, email, school);
        employeeList.push(intern)
        promptMenu();
    })
}

// Methods
init();