const inquirer = require('inquirer');
console.log(inquirer);

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
        message: 'What is your team manager\'s officevnumber?', 
    }
    
])