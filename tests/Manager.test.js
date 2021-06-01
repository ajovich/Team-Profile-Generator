const manager = require('lib/Manager.js')

test('Will set officeNumber to "237"', () => {
    const officeNumber = "237";
    const employee = newEmployee(officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
})

test('Will set role to "Manager"', () => {
    const role = "Manager";
    const employee = newEmployee(role);
    expect(employee.role).toBe(role);
})