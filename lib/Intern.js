// Import Employee constructor
// Adds school parameter along with super parameters name, id, email from Employee parent class
const Employee = require('lib/Employee.js');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school = school
        this.role = "Intern"
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern