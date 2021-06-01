const employee = require('lib/Employee.js');

test('Will set const name to "Allysha"', () => {
    const name = "Allysha";
    const employee = newEmployee(name)
    expect(employee.name).toBe(name);
});

test('Will set id to "98368"', () => {
    const id = "98368";
    const employee = newEmployee(id);
    expect(employee.id).toBe(id);
})

test('Will set role to "Employee"', () => {
    const role = "Employee";
    const employee = newEmployee(role);
    expect(employee.role).toBe(role);
})