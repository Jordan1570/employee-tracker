const inquirer = require('inquirer'); 

function init() {

    inquirer.prompt([

        {
            type: 'list',
            name: 'initialAction',
            message: 'What would you like to do?',
            choices: ['Add Employee', ]
        }

        
    ])
}

init()