class Employee {
    constructor(name,id,email){
    
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    }

    renderName() {
        return this.name;
    }

    renderId() {
        return this.id;
    }

    renderEmail() {
        return this.email;
    }
}

module.exports = Employee;