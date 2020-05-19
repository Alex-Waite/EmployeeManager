// Module imports
const util = require("util");
const mysql = require("mysql");
const inquirer = require("inquirer")
const table = require("console.table")


// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Killer88',
    database: 'employees_db'
});

connection.connect(function (error) {
    if (error) throw error;
    else console.log("connected as id " + connection.threadId)
});
connection.query = util.promisify(connection.query);