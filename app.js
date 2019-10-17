// // Dependencies
const inquirer = require('inquirer');

// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Questions
const {
    employeeTypeQuestions,
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions
} = require('./lib/questions');


async function createEmployee(employeeType) {
    console.log('Employee Type', employeeType);
    let employee;

    try {

        if (employeeType === 'Manager') {

            employee = await inquirer
                .prompt(employeeQuestions.concat(managerQuestions));

            const { name, id, email, officeNumber } = employee;
            return new Manager(name, id, email, officeNumber)

        } else if (employeeType === 'Engineer') {

            employee = await inquirer
                .prompt(employeeQuestions.concat(engineerQuestions));

            const { name, id, email, githubUsername } = employee
            return new Engineer(name, id, email, githubUsername)

        } else if (employeeType === 'Intern') {

            employee = await inquirer
                .prompt(employeeQuestions.concat(internQuestions));

            const { name, id, email, school } = employee;
            return new Intern(name, id, email, school)

        }

    } catch (err) {
        console.log(err)

    }


}

// Returns an array of all team members
async function createTeam() {

    const team = [];

    return new Promise(async (resolve, reject) => {
        try {

            // Get manager and push to team array
            let manager = await createEmployee('Manager');
            team.push(manager);
            console.log('TEAM', team);

            // Get next employee
            await getEmployee();

            async function getEmployee() {
                try {
                    inquirer
                        .prompt(employeeTypeQuestions)
                        .then(async ({ employeeType }) => {
                            if (employeeType) {
                                return { employee } = await createEmployee(employeeType)
                            } else {
                                return null
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
                    reject(err)
                }
            }


        } catch (err) {
            console.log(err)
        }
    })
}

async function test() {
    let finalTeam = await createTeam();
    console.log(finalTeam);
}

test();
















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