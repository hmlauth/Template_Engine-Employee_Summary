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
        getEmployee();
    })
}

function getEmployee() {
    inquirer
    .prompt(menuQuestions)
    .then(({userChoice}) => {
        switch (userChoice) {
            case 'Engineer':
                getEngineer();
                break;
            case 'Intern':
                getIntern();
                break;
            case 'Exit':
                displayHtml(employeeList);
                // TODO - How to export employee list keeping functions and display logic separate
                break;
        }
    })
}

function getEngineer() {
    inquirer
    .prompt(employeeQuestions.concat(engineerQuestions))
    .then(({name, id, email, githubUsername}) => {
        let engineer = new Engineer(name, id, email, githubUsername);
        employeeList.push(engineer);
        getEmployee();
    })
}

function getIntern() {
    inquirer
    .prompt(employeeQuestions.concat(internQuestions))
    .then(({name, id, email, school}) => {
        let intern = new Intern(name, id, email, school);
        employeeList.push(intern)
        getEmployee();
    })
}

// Methods
init();