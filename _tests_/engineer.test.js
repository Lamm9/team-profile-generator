const Engineer = require('../lib/engineer');

describe('getGitHub', () => {
    it("should return employee's Github profile based on inquirer input", () => {
        const name = 'Elijah';
        const id = 4;
        const email = 'elijah@1kings.com';
        const gitHub = 'url';

        const result = new Engineer(name, id, email, gitHub);

        expect(result.getGitHub()).toBe(gitHub);
    })
});

describe('getRole', () => {
    it("should return employee's role from inquirer input", () => {
        const name = 'Elijah';
        const id = 4;
        const email = 'elijah@1kings.com';
        const role = 'Engineer';

        const result = new Engineer(name, id, email, role);

        expect(result.getRole()).toBe(role);
    })
});