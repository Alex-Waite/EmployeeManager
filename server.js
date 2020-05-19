// Module imports
const util = require("util");
const mysql = require("mysql");
const inquirer = require("inquirer")


// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Killer88',
    database: 'employees_db'
});

connection.connect();
connection.query = util.promisify(connection.query);