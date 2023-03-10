const Intern = require('../lib/intern');

describe('getSchool', () => {
    it("should return employee's school based on inquirer input", () => {
        const name = 'Elijah';
        const id = 4;
        const email = 'elijah@1kings.com';
        const role = 'Intern';
        const school = 'UCR';

        const result = new Intern(name, id, email, school);

        expect(result.getSchool()).toBe(school);
    })
});

describe('getRole', () => {
    it("should return employee's role from inquirer input", () => {
        const name = 'Elijah';
        const id = 4;
        const email = 'elijah@1kings.com';
        const role = 'Intern';

        const result = new Intern(name, id, email, role);

        expect(result.getRole()).toBe(role);
    })
});