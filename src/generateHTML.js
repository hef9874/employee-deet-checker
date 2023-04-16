const createTeam = (fullTeam) => { //call team something ()
  const showManager = (manager) => {
    return `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${manager.getName()}</h5>
                  <p class="id">${manager.getId()}</p>
                  <a href="email">${manager.getEmail()}</a>
                  <p class="officeNumber">${manager.getOfficeNumber()}</p>
                </div>
              </div>
            </div>
            </div>`;
  };

  const showEngineer = (engineer) => {
    return `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${engineer.getName()}</h5>
                  <p class="id">${engineer.getId()}</p>
                  <a href="email">${engineer.getEmail()}</a>
                  <a href="gitHub">${engineer.getGitHub()}</a> 
                </div>
              </div>
            </div>
            </div>`;
  };
  // make into href link

  const showIntern = (intern) => {
    return `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${intern.getName()}</h5>
                  <p class="id">${intern.getId()}</p>
                  <a href="email">${intern.getEmail()}</a>
                  <p class="school">${intern.getSchool()}</p>
                </div>
              </div>
            </div>
            </div>`;
  };


//array to put info

const infoArray = [];

// filter fullTeam for managers and push the output into infoArray
const managers = fullTeam.filter(manager => manager.getRole() === 'Manager');
const managerOutput = managers.map(manager => showManager(manager));
infoArray.push(...managerOutput);

// filter fullTeam for engineers and push the output into infoArray
const engineers = fullTeam.filter(engineer => engineer.getRole() === 'Engineer');
const engineerOutput = engineers.map(engineer => showEngineer(engineer));
infoArray.push(...engineerOutput);

// filter fullTeam for interns and push the output into infoArray
const interns = fullTeam.filter(intern => intern.getRole() === 'Intern');
const internOutput = interns.map(intern => showIntern(intern));
infoArray.push(...internOutput);

return infoArray.join("");
}

module.exports = pageHTML => {
  return `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <title>Employee Deet Checker</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              <header>
                <h1>My Team</h1>
              </header>
              <main>
                ${createTeam(pageHTML)}
              </main>
            </body>
          </html>
        `};

