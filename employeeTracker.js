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
            choices: [{ name: "Add Department", value: "addDepartment" }, { name: "View Departments", value: "viewDepartments" },  { name: "Add Role", value: "addRole" }, { name: "View Roles", value: "viewRoles" }, { name: "Add Employee", value: "addEmployee" }, { name: "View Employees", value: "viewEmployees" }, { name: "Update Employees", value: "updateEmployees" }, { name: "Exit", value: "exit" }]
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
            // else if(answer.startMenu === "updateEmployees"){
                // updateEmployees()
            // } 
            else if (answer.startMenu === "exit"){
                endApplication()
            }
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
        message: "What is the name of the department that you would like to add?"
    }
]) .then(function(answer){
    console.log(answer);
})
};
function viewDepartments(){
    var query ="SELECT * FROM department";
    connection.query(query, function(err, deptData){
        if(err) throw err;
        console.table ("All Departments", deptData);   
    })
};

function viewRoles(){
    var query = "SELECT * FROM role";
    connection.query(query, function(err, roleData){
        if(err) throw err;
        console.table ("All Roles", roleData);   
    })
};

function viewEmployees(){
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, empData){
        if(err) throw err;
        console.table ("All Employees", empData)
    })
};

function endApplication(){
    connection.end
}