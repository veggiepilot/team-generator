const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return this;
    }
}

const intern1 = new Intern('Johannes', 2, 'johannes@andrews.edu', 'Andrews U');

console.log(intern1.getRole());