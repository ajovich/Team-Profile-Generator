const intern = require('lib/Intern.js');

test('Will set school to "University of Washington"', () => {
    const school = "University of Washington";
    const employee = newEmployee(school);
    expect(employee.school).toBe(school);
})

test('Will set role to "Intern"', () => {
    const role = "Intern";
    const employee = newEmployee(role);
    expect(employee.role).toBe(role);
})