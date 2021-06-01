// Employee parent class 
// The other 3 classes will extend 'Employee' class along with their own specific properties
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.role = "Employee";
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    }
}

module.exports = Employee;