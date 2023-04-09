const { query } = require("express");
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

//express 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Database connection
const db = mysql.createConnection(
    {
      host: "127.0.0.1",
      // MySQL username,
      user: "root",
      password: process.env.DB_PASSWORD,
      database: "employee_db",
    },
    console.log(`Database Connected.`)
);

//If database is connected, start prompts



//show main menu prompts
const showPrompts = () => {
        return inquirer.prompt ([
        {
            type: 'list',
            message: "Choose an option",
            name: "Choices",
            choices: [
                "View Departments",
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Update an employee manager',
                'View all employees by manager',
                'View all employees by department',
                "View budget",
                "Delete department",
                "Delete role",
                "Delete employee",
                'Quit',
            ]
        }
    ]
        )};

//start specific function depending on the user answer
switch (userAnswer.startPrompt) {
    case "View Departments":
        viewDepartments();
        break;
    case "View all roles":
        viewRoles();
        break;
    case "View all employees":
        viewEmployess();
    break;
    case "Add a department":
        addDepartment();
    break;
    case "Add a role":
        addRole();
    break;
    case "Add an employee":
        addEmployee();
    break;
    case "Update an employee role":
        updateRole();
    break;
    case "Update an employee manager":
        updateManager();
    break;
    case "View all employees by manager":
        viewEmployeesbyManager();
        break;
    

}

//function to show dept names from db
function viewDepartments(res) {
    const departments, (err, res) => {
        if (err) throw err;
        console.log("Departments:");
        console.table(res);
        showPrompts()
    }
}

//function to view roles 


app.listen(PORT, () => {
    console.log("Employee Deets Checker is connected.");
  });