const Manager = require('./Employee');

//subclass Engineer brings in parent employee class adds gitHub
class Manager extends Employee {
    constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }

getOfficeNumber() {
    return this.officeNumber;
};

getRole() {
    return "Manager";
}
}

module.exports = Manager;