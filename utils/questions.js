const questions = {
    menuQuestions: [
        {
            type: 'list',
            message: 'Who are you?',
            name: 'userChoice',
            choices: ['Engineer', 'Intern', 'Exit']
        }
    ],

    employeeQuestions: [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'number',
            message: 'What is your id number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ],

    managerQuestions: [
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber'
        }
    ],

    engineerQuestions: [
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUsername'
        }
    ],

    internQuestions: [
        {
            type: 'input',
            message: 'Where do you attend school?',
            name: 'school'
        }
    ],
    // createQuestions: function(specificQuestions) {
    //     return this.employeeQuestions.concat(specificQuestions)
    // }
};

module.exports = questions;