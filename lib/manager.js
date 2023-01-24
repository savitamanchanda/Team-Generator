const Employee = require('./employee')

class Manager extends Employee {
    constructor(name,id,email,github) {

        super(name,id,email);

        this.github = github;
        this.role = "Manager";
    }

    renderGithub() {
        return this.github
    }
}

module.exports = Manager;