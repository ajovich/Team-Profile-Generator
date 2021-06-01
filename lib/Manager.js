// Import Employee constructor
// Adds officeNumber parameter along with super parameters name, id, email from Employee parent class
const Employee = require('lib/Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber
        this.role = "Manager"
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager