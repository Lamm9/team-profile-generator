const Employee = require('../lib/employee');

describe('getName', () => {
    it("should return employee's name from inquirer input", () => {
        const name = 'Elijah'

        const result = new Employee(name, "1", "email@email.com");

        expect(result.name).toBe('Elijah');
    })
});

describe('getID', () => {
    it("should return employee's id number from inquirer input", () => {
        const id = 4;
        const name = 'Elijah';

        const result = new Employee(name, id);

        expect(result.id).toBe(4);
    })
});

describe('getEmail', () => {
    it("should return employee's email from inquirer input", () => {
        const name = 'Elijah';
        const id = 4;
        const email = 'elijah@1kings.com';

        const result = new Employee(name, id, email);

        expect(result.email).toBe('elijah@1kings.com');
    })
});

describe('getRole', () => {
    it("should return employee's role from inquirer input", () => {
        const name = 'Elijah';
        const id = 4;
        const email = 'elijah@1kings.com';
        const role = 'Employee';

        const result = new Employee(name, id, email,);

        expect(result.getRole()).toBe(role);
    })
});