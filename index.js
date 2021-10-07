const inquirer      = require('inquirer');
const Engineer      = require('./lib/Engineer.js');
const Intern        = require('./lib/Intern.js');
const Manager       = require('./lib/Manager.js');
const fs            = require('fs');
const generateHTML  = require('./src/generateHTML.js');
let employeeObjects = require('./src/employeeObjects.js');

const employee = function employee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team manager\'s name?', 
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is your team manager\'s employee ID?', 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team manager\'s email?', 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your team manager\'s office number?', 
        },
        {
            type: 'list',
            name: 'selectEmployee',
            message: 'Which employee data do you want to enter next?',
            choices: [
                'Engineer',  
                'Intern', 
                'Finish building team'
            ],
        }
    ])
        
    .then((answers) => { 
        let newManager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
        employeeObjects.push(newManager);
        if (answers.selectEmployee === 'Engineer') {
            engineer();
        } else if (answers.selectEmployee === 'Intern') {
            intern();
        }else {
            fs.writeFile('./dist/index.html', generateHTML(employeeObjects), () => {
                console.log('Generating your HTML file....');
            });
        } 
    })
    .catch(err => console.log(err));
}

function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineer\'s name?'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is your engineer\'s ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineer\'s email?'
        },
        {
            type: 'input',
            name: 'engineerUsername',
            message: 'What is your engineer\'s github username?'
        },
        {
            type: 'list',
            name: 'selectEmployee',
            message: 'Which employee data do you want to enter next?',
            choices: [
                'Engineer',  
                'Intern', 
                'Finish building team'
            ]
        }
    ])
    .then(answers => { 
        let newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerUsername);
        employeeObjects.push(newEngineer);

        if (answers.selectEmployee === 'Engineer') {
            engineer();
        } else if (answers.selectEmployee === 'Intern') {
            intern();
        }else {
            fs.writeFile('./dist/index.html', generateHTML(employeeObjects), () => {
                console.log('Generating your HTML file....');
            });
        } 
    })
    .catch(err => console.log(err))
}

function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your intern\'s name?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is your intern\'s ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your intern\'s email address?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Which school does your intern attend?'
        },
        {
            type: 'list',
            name: 'selectEmployee',
            message: 'Which employee data do you want to enter next?',
            choices: [
                'Engineer',  
                'Intern', 
                'Finish building team'
            ]
        }    
    ])
    .then((answers) => { 
        let newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        employeeObjects.push(newIntern);
        if (answers.selectEmployee === 'Engineer') {
            engineer();
        } else if (answers.selectEmployee === 'Intern') {
            intern();
        }else {
            fs.writeFile('./dist/index.html', generateHTML(employeeObjects), () => {
                console.log('Generating your HTML file....');
            });
        } 
    })
    .catch(err => console.log(err));
}

employee();


