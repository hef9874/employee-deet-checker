const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generateHTML');

// importing subclasses
const TeamManager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");
const newPath = path.resolve(__dirname, "dist");
const teamHTML = path.join(newPath, 'team.html');

// array to add team members to
const teamInfo = [];
const ids = [];

function buildTeam() {
    // get info about manager
    const inputManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: 'input manager name - ',
                name: 'nameManager',
            },
            {
                type: 'input',
                message: 'input manager id- ',
                name: 'idManager',
            },
            {
                type: 'input',
                message: 'input manager email- ',
                name: 'emailManager',
            },
            {
                type: 'input',
                message: 'input manager office # - ',
                name: 'officeNumber',
            },
        ])
            .then(managerInput => {
                const manager = new TeamManager(managerInput.nameManager, managerInput.idManager, managerInput.emailManager, managerInput.officeNumber);
                teamInfo.push(manager);
                ids.push(managerInput.idManager);
                console.log(manager, "this is the team manager");
                createManagerTeam()
            });
    };

    function createManagerTeam() {
        //engineer info
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'Choose employee type',
                choices: ['engineer', 'intern', 'none'],
            }
        ]).then(choice => {
            switch (choice.employeeType) {
                case 'engineer': createEngineer();
                break;
                case 'intern': createIntern();
                break;
                default: showTeam();
            }
        })
        const createEngineer = () => {

            inquirer.prompt([
                {
                    type: 'input',
                    message: 'input engineer name - ',
                    name: 'nameEngineer',
                },
                {
                    type: 'input',
                    message: 'input engineer id - ',
                    name: 'idEngineer',
                },
                {
                    type: 'input',
                    message: 'input engineer email- ',
                    name: 'emailEngineer',
                },
                {
                    type: 'input',
                    message: 'input engineer gitHub username - ',
                    name: 'gitHub',
                },
            ])
                .then(engineerInput => {
                    const engineer = new Engineer(engineerInput.nameEngineer, engineerInput.idEngineer, engineerInput.emailEngineer, engineerInput.gitHub);
                    teamInfo.push(engineer);
                    ids.push(engineerInput.idEngineer);
                    console.log(engineer, "this is the engineer");
                    createManagerTeam()
                });
        };

        //intern info
        const createIntern = () => {
            return inquirer.prompt([
                {
                    type: 'input',
                    message: 'input intern name - ',
                    name: 'nameIntern',
                },
                {
                    type: 'input',
                    message: 'input intern id - ',
                    name: 'idIntern',
                },
                {
                    type: 'input',
                    message: 'input intern email - ',
                    name: 'emailIntern',
                },
                {
                    type: 'input',
                    message: 'input intern school - ',
                    name: 'school',
                },

                //look into validate field 
            ])
                .then(internInput => {
                    const intern = new Intern(internInput.nameIntern, internInput.idIntern, internInput.emailIntern, internInput.school);
                    teamInfo.push(intern);
                    ids.push(internInput.idIntern);
                    console.log(intern, "this is the intern");
                    createManagerTeam()
                });
        }
    };

    //write file based on input 
    // async function writeFile(data) {
    //     const filePath = path.join(__dirname, 'dist', 'index.html');
    //     try {
    //         await fs.writeFile(filePath, data);
    //         console.log('The team profile has been successfully generated!');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    function showTeam() {
        if(!fs.existsSync(newPath)){
            fs.mkdirSync(newPath)
        }
        fs.writeFileSync(teamHTML, generateHTML(teamInfo),'utf-8');
    }
    inputManager();
}

buildTeam();

