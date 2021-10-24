const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

//database connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company_db'
    },
    console.log(`Connected to company database.`)
)

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    getAllDepartments() {
        return this.connection.promise().query('SELECT * FROM department')
    }

    getAllRoles() {
        return this.connection.promise().query('SELECT * FROM role')
    }

    getAllEmployees() {
        return this.connection.promise().query('SELECT * FROM employee');
    }

    getDepartmentById(deptId) {
        return this.connection.promise().query(`SELECT * FROM department WHERE id = ${deptId}`, function (err, results) {
            console.table(results);
        });
    }

    getRoleById(roleId) {
        return this.connection.promise().query(`SELECT * FROM role WHERE id = ${roleId}`, function (err, results) {
            console.table(results);
        });
    }

    addDepartment(newDept) {
        return this.connection.promise().query(`INSERT INTO departments (name) VALUES ${newDept}`, function (err, results) {
            console.log(results)
        });
    }

    addRole(newRole) {
        return this.connection.promise().query(`INSERT INTO role (name) VALUES ('${newRole}')`, function (err, results) {
            console.log(results)
        });
    }

    addEmployee(newEmployee) {
        return this.connection.promise().query(`INSERT INTO employee (name) VALUES ('${newEmployee}')`, function (err, results) {
            console.log(results)
        });
    }

    updateEmployeeRole(newEmployeeRole, employeeId) {

        return this.connection.promise().query(`UPDATE employee SET role_id = ${newEmployeeRole} WHERE id = ${employeeId}`)

    }
}

module.exports = new Database(db)

