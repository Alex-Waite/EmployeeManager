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
connection.query = util.promisify(connection.query);
connect = util.promisify(connection.connect);

connection.connect(function (error) {
    if (error) throw error;
    else console.log("connected as id " + connection.threadId)
});


appStarter = async function () {
    // First must connect to the server before anything else can happen
    await connect
    // Loops the app untill this is made "false" (when user exits)
    while (true) {
        // Inq prompt to determine what the user wants to do
        function task() {
            return inquirer.prompt({
                name: "whatTask",
                type: "list",
                message: "Please pick a task",
                choices: ["View", "Add", "Update employee roles", "Exit"]
            })
        }

        // Determines where to go based on user chosen task
        let selectedTask = await task()

        if (selectedTask.whatTask === "View") {
            // Viewing existing data path
            console.log("View pathing all g")

            function viewWhat() {
                return inquirer.prompt({
                    name: "whatToView",
                    type: "list",
                    message: "What would you like to view?",
                    choices: ["Departments", "Roles", "Employees", "Go-Back"]
                })
            }


        } else if (selectedTask.whatTask === "Add") {
            // Adding new data path
            console.log("Add pathing all g")

        } else if (selectedTask.whatTask === "Update employee roles") {
            // Updating existing data path
            console.log("Update pathing all g")

        } else if (selectedTask.whatTask === "Exit") {
            // Exit path
            console.log("Exit Works")
            return false
        }

    }
}

appStarter()