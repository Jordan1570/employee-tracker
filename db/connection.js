const mysql = require('mysql2');
require('console.table');

// connect to database
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
        return this.connection.query('SELECT * FROM department', function (err, results) {
            console.table(results);
        });
    }

    getAllRoles() {
        return this.connection.query('SELECT * FROM role', function (err, results) {
            console.table(results);
        });
    }

    getAllEmployees() {
        return this.connection.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
        });
    }

    getDepartmentById(deptId) {
        return this.connection.query(`SELECT * FROM department WHERE id = ${deptId}`, function (err, results) {
            console.table(results);
        });
    }

    getRoleById(roleId) {
        return this.connection.query(`SELECT * FROM role WHERE id = ${roleId}`, function (err, results) {
            console.table(results);
        });
    }
   
}

module.exports = new Database(db) 

