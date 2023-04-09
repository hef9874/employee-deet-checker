const Employee = require('./Employee');

//subclass Engineer brings in parent employee class adds gitHub
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    }
//shows github username
getGitHub() {
    return this.gitHub;
};
//overrides employee puts role as engineer
getRole() {
    return "Engineer";
}
}

module.exports = Engineer;
