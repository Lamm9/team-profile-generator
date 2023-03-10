const Manager = require('../lib/manager');

describe('getOfficeNum', () => {
    it("should return manager's office number based on inquirer input", () => {
        const name = 'Elijah';
        const id = 4;
        const email = 'elijah@1kings.com';
        const officeNum = 4;

        const result = new Manager(name, id, email, officeNum);

        expect(result.getOfficeNum()).toBe(officeNum);
    })
})