const DEBUG = false;
const fs = require('fs');
const path = require('path');

[`<p>
    Engineer
</p>`,
`<p>
    Intern
</p>`,`<p>Intern</p>`].join('')

`
<p>Engineer</p>
<p>Intern</p>
<p>Intern</p>
`


function createCards(employeeList) {
    return employeeList.map(employee => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">
                    ${capitalizeIt(employee.getName())}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    ${employee.getRole()}
                </h6>
                <p class="card-text">
                    ID: ${employee.getId()}
                </p>
                <a href="#" class="card-link">
                    Email: ${employee.getEmail()}
                </a>
                <p class="card-text">
                    ${renderDetail(employee)} 
                </p>
            </div>
        </div>`
    }).join('\n')
};

function renderDetail(employee) {
    let [detailName] = Object.keys(employee).reverse();
    let DetailName = capitalizeIt(detailName);

    if (DetailName === 'OfficeNumber') {
        DetailName = 'Office Number'
    }
    return `${DetailName}: ${employee.getDetail()}`
};

function addCardsToHtmlBody(employeeCards) {
    return `
        <!doctype <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>Employee Generator</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <!-- Bootstrap -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous">
                <link rel="stylesheet" href="./style.css">

            </head>
            <body>

                <div class="jumbotron">
                    <h1 class="display-4">The Webmistresses</h1>
                    <p class="lead">Spinning sites since summer.</p>
                    <hr class="my-4">
                    <h6>Meet the team</h6>
                </div>
                
                <main class="container">
                    ${employeeCards}
                </main>

            </body>
        </html>
    `
};

function displayHtml(employeeList) {

    const employeeCards = createCards(employeeList);
    const html = addCardsToHtmlBody(employeeCards);

    fs.writeFile(path.join(__dirname, '..', 'output', 'index.html'), html, err => {
        if (err) throw err;
        console.log('Success!');
    });

};

function capitalizeIt(word) {
    return word.replace(/^./, word[0].toUpperCase())
};

// ==========================================
if (DEBUG) {
    const Manager = require('../lib/Manager');
    const Engineer = require('../lib/Engineer');

    let hanna = new Manager('hanna',3,'hanna@gmail.com',3);
    let engineer = new Engineer('zane',10,'zane@gmail.com',10);

    let employeeList = [hanna,engineer];
    displayHtml(employeeList);
}
// ==========================================

module.exports = displayHtml;