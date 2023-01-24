const Employee = require('./employee')

class Intern extends Employee {
    constructor(name,id,email,github) {

        super(name,id,email);

        this.github = github;
        this.role = "Intern";
    }

    renderGithub() {
        return this.github
    }
}

module.exports = Intern;