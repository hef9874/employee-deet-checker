const Employee = require('./Employee');

//subclass intern brings in parent employee class adds school
class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    }

getSchool() {
    return this.school;
};
//overrides employee puts role as intern
getRole() {
    return "Intern";
}
}

module.exports = Intern;