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

// get info about manager
const inputManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'input manager name - ',
            name: 'name',
        },
        {
            type:'input',
            message: 'input manager id- ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'input manager email- ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'input manager office # - ',
            name: 'officeNumber',
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const teamManager = new Manager (name, id, email, officeNumber);
        teamInfo.push(teamManager);
        console.log(teamManager, "this is the team manager");
    });
};

//engineer info
const createEngineer = () => {
    return inquirer.prompt( [
        {
            type: 'input',
            message: 'input engineer name - ',
            name: 'name',
        },
        {
            type:'input',
            message: 'input engineer id - ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'input engineer email- ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'input engineer gitHub username - ',
            name: 'gitHub',
        },
    ])
    .then(engineerInput => {
        const { name, id, email, gitHub } = engineerInput;
        const teamEngineer = new Engineer (name, id, email, gitHub);
        teamInfo.push(teamEngineer);
        console.log(teamEngineer, "this is the engineer");
    });
};

//intern info
const createIntern = () => {
    return inquirer.prompt( [
        {
            type: 'input',
            message: 'input intern name - ',
            name: 'name',
        },
        {
            type:'input',
            message: 'input intern id - ',
            name: 'id',
        },
        {
            type: 'input',
            message: 'input intern email - ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'input intern school - ',
            name: 'school',
        },
    ])
    .then(internInput => {
        const { name, id, email, school } = internInput;
        const teamIntern = new Engineer (name, id, email, school);
        teamInfo.push(teamIntern);
        console.log(teamIntern, "this is the intern");
    });
};

//write file based on input 
async function writeFile(data) {
    const filePath = path.join(__dirname, 'dist', 'index.html');
    try {
      await fs.writeFile(filePath, data);
      console.log('The team profile has been successfully generated!');
    } catch (err) {
      console.error(err);
    }
  };

  async function showTeam() {
    try {
      const manager = await inputManager();
      const employee = await createEmployee();
      const team = [manager, ...employee];
      const pageHTML = await generateHTML(team);
      await writeFile(pageHTML);
      console.log('The team profile has been successfully generated');
    } catch (err) {
      console.error(err);
    }
  }
  
 showTeam();
  
