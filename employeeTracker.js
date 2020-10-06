require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password: process.env.DB_PASS,
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    mainMenu()
});

function mainMenu() {
    //questions
    inquirer.prompt([
        {
            type: "list",
            name: "startMenu",
            message: "Welcome to the Employee Tracker. What would you like to do?",
            choices: [{ name: "Add Department", value: "addDepartment" }, 
            { name: "View Departments", value: "viewDepartments" }, 
            { name: "Add Role", value: "addRole" }, 
            { name: "View Roles", value: "viewRoles" }, 
            { name: "Add Employee", value: "addEmployee" }, 
            { name: "View Employees", value: "viewEmployees" }, 
            { name: "Update Employee Role", value: "updateEmployeeRole" }, 
            { name: "Exit", value: "exit" }]
        }
    ])
        .then(function (answer) {
            if (answer.startMenu === "addEmployee") {
                addEmployee()
            }
            else if (answer.startMenu === "viewEmployees") {
                viewEmployees()
            }
            else if (
                answer.startMenu === "addDepartment"
            ) {
                addDepartment()
            }
            else if (answer.startMenu === "viewDepartments") {
                viewDepartments()
            }
            else if (answer.startMenu === "addRole") {
                addRole()
            }
            else if (answer.startMenu === "viewRoles") {
                viewRoles()
            }
            else if(answer.startMenu === "updateEmployeeRole"){
            updateEmployeeRole()
            } 
            else if (answer.startMenu === "exit") {
                endApplication()
            }
        })
};

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
        connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, data) {
                if (err)
                    throw err;
                console.log("Success!");
                mainMenu()
            }
        )
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
    ]).then(function (answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES(?, ?, ?)", [answer.title, answer.salary, answer.department_id], function (err, data) {
            if (err)
                throw err;
            console.log("Success!");

            mainMenu()
        })
    });
};

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "departmentName",
        message: "What is the name of the department that you would like to add?"
    }
    ]).then(function (answer) {
        connection.query("INSERT INTO department (departmentName) VALUES(?)", [answer.departmentName], function (err, data) {
            if (err)
                throw err;
            console.log("Success!");
            mainMenu()
        })
    })
};
function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, deptData) {
        if (err) throw err;
        console.table("All Departments", deptData);
        mainMenu()
    })
};

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, roleData) {
        if (err) throw err;
        console.table("All Roles", roleData);
        mainMenu()
    })
};

function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, empData) {
        if (err) throw err;
        console.table("All Employees", empData);
        mainMenu()
    })
};

function updateEmployeeRole() {

    inquirer.prompt([
        {
            type:"input",
            message: "What is the first name of the employee whose role you'd like to update?",
            name: "first_name"
        },
        {
            type:"input",
            message: "Enter new role id",
            name: "role_id"
        },


    ]).then (function (answer){
    connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [answer.role_id, answer.first_name],
        function (err, data) {
            if (err) throw err;
            console.log("Success!");
            mainMenu()
        }
    )
})
};

function endApplication() {
    connection.end
};