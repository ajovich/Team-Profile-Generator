// Import Employee constructor
// Adds github parameter along with super parameters name, id, email from Employee parent class
const Employee = require('lib/Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github
        this.role = "Engineer"
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer; 