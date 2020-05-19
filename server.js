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
    database: 'employees2_db'
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
            let selectedView = await viewWhat()
            if (selectedView.whatToView === "Departments") {
                const dept = await connection.query("SELECT * FROM department;")
                console.table(dept)

            } else if (selectedView.whatToView === "Roles") {
                const roles = await connection.query("SELECT * FROM role;")
                console.table(roles)

            } else if (selectedView.whatToView === "Employees") {
                const employees = await connection.query("SELECT * FROM employee;")
                console.table(employees)

            } else if (selectedView.whatToView === "Go-Back") {

            }


        } else if (selectedTask.whatTask === "Add") {
            // Adding new data path
            console.log("Add pathing all g")

            function addWhat() {
                return inquirer.prompt({
                    name: "whatToAdd",
                    type: "list",
                    message: "What would you like to add a new entry to?",
                    choices: ["Departments", "Roles", "Employees", "Go-Back"]
                })
            }
            let selectedAdd = await addWhat()
            if (selectedAdd.whatToAdd === "Departments") {
                function newDepartment() {
                    return inquirer.prompt({
                        name: "newDeptName",
                        type: "input",
                        message: "What is the name of the new department?"
                    })
                }
                const waitNewDept = await newDepartment()
                const injectNewDept = await connection.query(`INSERT INTO department(name) VALUES ("${waitNewDept.newDeptName}");`)
                injectNewDept
                let Checker = await connection.query(`SELECT * FROM department;`)
                console.table(Checker)

            } else if (selectedAdd.whatToAdd === "Roles") {
                function newRole() {
                    return inquirer.prompt([{
                        name: "newRoleName",
                        type: "input",
                        message: "What is the title of the new Role?"
                    }, {
                        name: "newRoleSalary",
                        type: "input",
                        message: "What is the salary of the new role?"
                    }, {
                        name: "newRoleDept",
                        type: "input",
                        message: "What is the department of the new role?"
                    }])
                }
                const waitNewRole = await newRole()
                const injectNewRole = await connection.query(`INSERT INTO role(title, salary, department_id) VALUES ("${waitNewRole.newRoleName}", ${waitNewRole.newRoleSalary}, ${waitNewRole.newRoleDept});`)
                injectNewRole
                let Checker = await connection.query(`SELECT * FROM role;`)
                console.table(Checker)

            } else if (selectedAdd.whatToAdd === "Employees") {

            } else if (selectedAdd.whatToAdd === "Go-Back") {

            }


        } else if (selectedTask.whatTask === "Update employee roles") {
            // Updating existing data path
            console.log("Update pathing all g")

        } else if (selectedTask.whatTask === "Exit") {
            // Exit path
            console.log("Thank you for using the Employee manager app!")
            connection.end();
            process.exit();
        }
    }
}


appStarter()