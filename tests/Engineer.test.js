const engineer = require('lib/Engineer.js')

test('Will set github to "ajovich"', () => {
    const github = "ajovich";
    const employee = newEmployee(github);
    expect(employee.github).toBe(github);
})

test('Will set role to "Engineer"', () => {
    const role = "Engineer";
    const employee = newEmployee(role);
    expect(employee.role).toBe(role);
})