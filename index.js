const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generateHTML');

// importing subclasses
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")

const path = require("path");
const newPath = path.resolve(__dirname, "dist");
const teamHTML = path.join(newPath, 'team.html');

// array to add team members to
const teamInfo = [];

async function init() {
    const managerInput = [
        {
            type: 'input',
            message: 'manager name- ',
            name: 'name',
        },
        {
            type:'input',
            message: 'manager id- ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'manager email- ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'manager office # - '
        }
    ]
}
