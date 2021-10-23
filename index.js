const inquirer = require('inquirer');
require('console.table');
const DB = require('./db/connection')
const departments = []
const roles = []
const managers = []

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

    DB.getAllRoles()
        .then(([rows, fields]) => {

            const roleChoices = rows.map(role => {
                return { name: role.title, value: role.id }
            })

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
                    choices: roleChoices
                },

                // {
                //     type: 'list',
                //     name: 'newEmployeeManager',
                //     message: 'Who is the new employee\'s manager?',
                //     choices: [`${managers}`]

                // }

            ])

                .then(roleRes => {
                    // const roleRes = res
                    DB.getAllEmployees()
                        .then(([rows, fields]) => {

                            const managerChoices = rows.map(manager => {
                                return { name: `${manager.first_name} ${manager.last_name}`, value: manager.id }
                            })

                            inquirer.prompt([
                                {

                                    type: 'list',
                                    name: 'newEmployeeManager',
                                    message: 'Who is the new employee\'s manager?',
                                    choices: managerChoices

                                }

                            ])
                                .then((res) => {
                                    const empToCreate = {
                                        first_name: roleRes.newEmployeeFirstName,
                                        last_name: roleRes.newEmployeeLastName,
                                        manager_id: res.newEmployeeManager,
                                        role_id: roleRes.newEmployeeRole
                                    }
                                    console.log(empToCreate)
                                    //  DB.createEmployee(empToCreate)
                                })
                                .catch((error) => {
                                    console.log(error)
                                })

                        })

                        .then(() => {

                        })
                        .catch((error) => {
                            console.log(error)
                        })


                    console.log('Added New Employee')

                })

        })
}

function updateEmployeeRole() {

    DB.getAllEmployees().then(([rows, fields]) => {
        console.table(rows);
        return rows;
    })

        .then((rows) => {

            const employeeChoices = rows.map((element) => {

                return {
                    name: `${element.first_name} ${element.last_name}`,
                    value: element.id
                }
            })


            inquirer.prompt([

                {
                    type: 'list',
                    name: 'employeeId',
                    message: 'Which employee\'s role would you like to update?',
                    choices: employeeChoices


                },
            ])
                .then(res => {

                    const employeeId = res.employeeId

                    DB.getAllRoles().then(([rows, fields]) => {

                        const roleChoies = rows.map((element) => {
                            return {
                                name: `${element.title}`,
                                value: element.id
                            }
                        })

                        inquirer.prompt([

                            {
                                type: 'list',
                                name: 'employeeRoleId',
                                message: 'What is the role you want to assign this employee?',
                                choices: roleChoies
                            }

                        ])
                            .then(res => {
                                DB.updateEmployeeRole(res.employeeRoleId, employeeId)
                            })
                            .then(() => {
                                console.log('Sucessfully Updated Employee')
                                init()
                            })
                    })

                }

                )
        })

    // .catch(console.log)

    // {
    //     name: 'newEmployeeRoleName',
    //     message: 'Which role do you want to assign the selected employee?',
    //     choices: []
    // }

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