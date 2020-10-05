require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: process.env.DB_PASS,
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //   afterConnection();
});

function mainMenu() {
    //questions
    inquirer.prompt([
        {
            type: "list",
            name: "startMenu",
            message: "What would you like to do?",
            choices: [{ name: "Add Department", value: "addDepartment" }, { name: "View Departments", value: "viewDepartments" },  { name: "Add Role", value: "addRole" }, { name: "View Roles", value: "viewRoles" }, { name: "Add Employee", value: "addEmployee" }, { name: "View Employees", value: "viewEmployees" }]
        }
    ])
        .then(function (answer) {
            if (answer.startMenu === "addEmployee") {
                addEmployee()
            }
            // else if (answer.startMenu === "viewEmployees") {
            //     // viewEmployees()
            // }
            else if (
                answer.startMenu === "addDepartment"
            ) {
                addDepartment()
            }
            // else if (answer.startMenu === "viewDepartment") {
            //     // viewDepartment()
            // }
            else if (answer.startMenu === "addRole") {
                addRole()
            }
            // else if (answer.startMenu === "viewRoles") {
            //     // viewRoles()
            // }
        })
};
mainMenu();

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?"
    },
    {
        type: "input",
        name: "last_name",
        message: " What is the employee's last name?"
    },
    {
        type: "input",
        name: "role_id",
        message: "What is the employee's role id?"
    },
    {
        type: "input",
        name: "manager_id",
        message: "What is the employee's manager id?"
    }
    ]).then(function (answer) {
        // var search = "insert into"
        //  connection.query(search)
        console.log(answer);
    })
};

function addRole() {
    inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of this role?"
    },
    {
        type: "input",
        name: "salary",
        message: "Enter the salary for this role."
    },
    {
        type: "input",
        name: "department_id",
        message: "Enter the department_id for this role."
    }
]) .then(function(answer){
    console.log(answer)
});
};

function addDepartment(){
    inquirer.prompt([{
        type: "input",
        name: "departmentName",
        message: "What is the name of this department?"
    }
]) .then(function(answer){
    console.log(answer);
})
};

