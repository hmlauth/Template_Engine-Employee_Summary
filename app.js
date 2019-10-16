// // Dependencies
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


// Asks questions and returns Manager {name, id, email, officeNumber}
async function getManager() {
    try {
        const { name, id, email, officeNumber } = await inquirer.prompt(employeeQuestions.concat(managerQuestions));
        return new Manager(name, id, email, officeNumber)
    } catch (err) {
        throw err
    }
}

// Asks questions and returns Engineer {name, id, email, github}
async function getEngineer() {
    try {
        const { name, id, email, githubUsername } = await inquirer.prompt(employeeQuestions.concat(engineerQuestions));
        return new Engineer(name, id, email, githubUsername)
    } catch (err) {
        throw err
    }
}

// Asks questions and returns Intern {name, id, email, school}
async function getIntern() {
    try {
        const { name, id, email, school } = await inquirer.prompt(employeeQuestions.concat(internQuestions));
        return new Intern(name, id, email, school)
    } catch (err) {
        throw err
    }
}

// Returns an array of all team members
async function createTeam() {
    
    const team = [];

    return new Promise(async (resolve, reject) => {
        try {

            // Get manager and push to team array
            let manager = await getManager();
            team.push(manager);
    
            // Get next employee
            await getEmployee();

            async function getEmployee() {
                try {
                inquirer
                    .prompt(menuQuestions)
                    .then(async ({ employeeType }) => {
                        if (employeeType === "Engineer") {
                            return { engineer } = await getEngineer();
                        } else if (employeeType === "Intern") {
                            return { intern } = await getIntern();
                        } else {
                            employee = null
                        }
                    }).then(employee => {
                        if (employee) {
                            team.push(employee);
                            getEmployee();
                        } else {
                            resolve(team)
                        }
                    })
                } catch (err) {
                    console.log(err)
                }
            }
            
    
        } catch (err) {
            console.log(err)
        }
    })
}


let finalTeam = await createTeam();

















// var promise1 = new Promise(function(resolve, reject) {
//     resolve('foo');
// });

// promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
// });

// console.log(promise1);
// // expected output: [object Promise]    

// getManager();
// async function getManager() {

//     inquirer
//         .prompt(employeeQuestions.concat(managerQuestions))
//         .then(manager => {
//             manager = instantiateEmployeeType(manager);
//             team.push(manager);
//             getEmployee();
//             function getEmployee() {
//                 inquirer
//                 .prompt(menuQuestions)
//                 .then(({employeeType}) => {
//                     if (employeeType === 'Engineer') {
//                         return getEngineer()
//                     } else if (employeeType === 'Intern') {
//                         return getIntern()
//                     } else {
//                         return null
//                     }
//                 }).then(employee => {
//                     if (employee) {
//                         let teamMember = instantiateEmployeeType(employee)
//                         team.push(teamMember);
//                         getEmployee();
//                     } else {
//                         return;
//                     }
//                 })
//             }
//         })
//         .catch(err => console.log(err))

//         return new Promise((resolve, reject) => resolve(team));

// }