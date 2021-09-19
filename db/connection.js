const mysql = require('mysql2');


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

// query database
db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
});

db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
});

db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
});

module.exports = db
