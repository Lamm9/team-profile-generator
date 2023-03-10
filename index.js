const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const renderHTML = require('./renderHTML');

//answers helper funct

const getAnswers = async (q) => {
    return await inquirer.prompt(q);
}

//logs on start

console.log('Welcome to the profile generator!');
console.log("Let's start with the team manager's profile.")

//questions for manager profile

const managerQ = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email?"
    },
    {
        type: 'input',
        name: 'officeNum',
         message: 'What is their office number?'
    }
]

//employee role selector

const employeeQ = [
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add another employee?',
            choices: [
                {key: 'Engineer', value: 'engineer'},
                {key: 'Intern', value: 'intern'},
                {key: 'Quit', value: 'quit'}
            ]
        }
]

//questions for engineer profile

const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: "What is this employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email?"
    },
    {
        type: 'input',
        name: 'gitHub',
        Message: "Please provide a link to this employee's Github profile."
    }
    
]

//questions for intern profile

const internQ = [
    {
    type: 'input',
        name: 'name',
        message: "What is this employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email?"
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where does this intern go to school?'
    }
]

//funct to assemble team
const getTeam = async () => {
    const teamMembers = [];

    // generates manager profile
    const {name,id,email,officeNum} = await getAnswers(managerQ);
    const manager = new Manager(name,id,email,officeNum);
    console.log(manager);
    teamMembers.push(manager);

    //loop through role selector until loop is broken
    let loop = true;

    while (loop) {

        const {role} = await getAnswers(employeeQ);

        if (role === 'engineer') {
            const {name, id, email, gitHub} = await getAnswers(engineerQ);
            
            const engineer = new Engineer(name, id, email, gitHub);
            teamMembers.push(engineer);
        } else if (role === 'intern') {
            const {name, id, email, school} = await getAnswers(internQ);

            const intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
        } else {
            console.log('Success!');
            fs.writeFileSync("./dist/html/index.html", renderHTML(teamMembers), (err) => {
                err ? console.log(err) : console.log('Success!');
            })
            //write code to create the file
           break;
        }
    }

    return teamMembers;
}

getTeam();