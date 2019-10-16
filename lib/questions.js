const questions = {
    menuQuestions: [
        {
            type: 'list',
            message: 'Employee Type:',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'Exit']
        }
    ],

    employeeQuestions: [
        {
            type: 'input',
            message: 'Name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'ID Number',
            name: 'id',
            validate: id => {
                let isValid = isNaN(id);
                if (!isValid) {
                    return true
                } else {
                    return 'Please enter a valid number.'
                }
            }
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
            validate: email => {
                let isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if (isValid) {
                    return true
                } else {
                    return 'Please enter a valid email address.'
                }
            }
        }
    ],

    managerQuestions: [
        {
            type: 'input',
            message: 'Office Number',
            name: 'officeNumber',
            validate: id => {
                let isValid = isNaN(id);
                if (!isValid) {
                    return true
                } else {
                    return 'Please enter a valid number.'
                }
            }
        }
    ],

    engineerQuestions: [
        {
            type: 'input',
            message: 'GitHub Username',
            name: 'githubUsername'
        }
    ],

    internQuestions: [
        {
            type: 'input',
            message: 'School',
            name: 'school'
        }
    ]
};

module.exports = questions;