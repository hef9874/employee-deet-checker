const showManager = (manager) => {
    return `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${manager.name}</h5>
                  <p class="id">${manager.id}</p>
                  <p class="email">${manager.email}</p>
                  <p class="officeNumber">${manager.officeNumber}</p>
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
                  <h5 class="card-title">${engineer.name}</h5>
                  <p class="id">${engineer.id}</p>
                  <p class="email">${engineer.email}</p>
                  <p class="gitHub">${engineer.gitHub}</p>
                </div>
              </div>
            </div>
            </div>`;
};

const showIntern = (intern) => {
    return `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${intern.name}</h5>
                  <p class="id">${intern.id}</p>
                  <p class="email">${intern.email}</p>
                  <p class="school">${intern.school}</p>
                </div>
              </div>
            </div>
            </div>`;
};

//show info on cards - connects html
function generateHTML(data) {
    const cards = data.map(employee => {
        const role = employee.getRole();
        let card;

        switch (role) {
            case 'Manager':
                card = createManager(employee);
                break;
            case 'Engineer':
                card = createEngineer(employee);
                break;
            case 'Intern':
                card = createIntern(employee);
                break;
            default:
                throw new Error(`Invalid role: ${role}`);
        }

        return card;
    });

    const pageHTML = `
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
                ${cards.join('')}
              </main>
            </body>
          </html>
        `;

    return pageHTML;
}

