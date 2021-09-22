const inquirer = require('inquirer');
require('console.table');
const DB = require('./db/connection')
const departments = []
const roles = []
const managers = []
const employees = []

// 
function init() {

    inquirer.prompt([

        {
            type: 'list',
            name: 'initialAction',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ])
        .then(res => {
            if (res.initialAction === 'View All Employees') {
                viewEmployees()
            }
            if (res.initialAction === 'Add Employee') {
                addEmployee()
            }
            if (res.initialAction === 'Update Employee Role') {
                updateEmployeeRole()
            }
            if (res.initialAction === 'View All Roles') {
                viewAllRoles()
            }
            if (res.initialAction === 'Add Role') {
                addRole()
            }
            if (res.initialAction === 'View All Departments') {
                viewAllDepartments()
            }
            if (res.initialAction === 'Add Department') {
                addDepartment()
            }
            if (res.initialAction === 'Quit') {
                quit()
            }
        })

}

init()

function viewEmployees() {
    // querying the database to view all employees
    DB.getAllEmployees()
        .then(([rows, fields]) => {
            console.table(rows);
        })

        .then(() => {
            init()
        })
        .catch(console.log)

}


function viewAllRoles() {
    // querying the database to view all roles
    DB.getAllRoles()
        .then(([rows, fields]) => {
            console.table(rows);
        })

        .then(() => {
            init()
        })
        .catch(console.log)

}

function viewAllDepartments() {
    // querying the database to view all the departments 
    DB.getAllDepartments()
        .then(([rows, fields]) => {
            console.table(rows);
        })

        .then(() => {
            init()
        })
        .catch(console.log)
        

}




function addEmployee() {
    DB.getAllEmployees

    inquirer.prompt([

        {
            name: 'newEmployeeFirstName',
            message: 'What is the employee\'s first name?',
        },

        {
            name: 'newEmployeeLastName',
            message: 'What is the employee\'s last name?'
        },

        
        {
            type: 'list',
            name: 'newEmployeeRole',
            message: 'What is the new employee\'s role?',
            choices: [`${roles}`]
        },

        {
            type: 'list',
            name: 'newEmployeeManager',
            message: 'Who is the new employee\'s manager?',
            choices: [`${managers}`]

        }

    ])


        .then(res => {



            console.log('Added New Employee')

            init()

        })


}

function updateEmployeeRole() {

    viewEmployees()

    inquirer.prompt([

        {
            type: 'list',
            name: 'employeeNewRole',
            message: 'Which employee\'s role would you like to update?',
            choices: [``]
        },

        {
            name: 'newEmployeeRoleName',
            message: 'Which role do you want to assign the selected employee?',
            choices: []
        }



    ])
        .then(res => {



            console.log('Updated employee role')

            init()
        })

}

function addRole() {

    console.log('Adding Role')

    inquirer.prompt([

        {
            type: 'input',
            name: 'newRole',
            message: 'What is the name of the role?',
        },

        {
            type: 'input',
            name: 'newRoleSalary',
            message: 'What is the salary of the role?'
        },

        {
            type: 'list',
            name: 'newRolesDepartment',
            message: 'Which department does this role belong to?',
            choices: [`${departments}`]
        }

    ])
        .then(res => {

            addRole()

            console.log('Added New Role to the database')

            init()
        })

}

function addDepartment() {

    inquirer.prompt([

        {
            name: 'newDepartment',
            message: 'What is the name of the department?',
        },

    ])
        .then(res => {

            addDepartment()

        })

}

function quit() {
    process.exit()

}