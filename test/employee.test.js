const Employee = require('../lib/employee');

describe('Employee', () => {
    describe("Initialization", () => {   
        it("should create an object with a name, id, email if provided valid arguments", () => {
            const employee = new Employee('Droan Rankavat', '222', 'drankavat@example.com');
            
            expect(employee.name).toEqual('Droan Rankavat');
            expect(employee.id).toEqual('222');
            expect(employee.email).toEqual('drankavat@example.com');
  });

});

describe("getName", () => {
    it("should return the name from the object", () => {
        const employee = new Employee('Droan Rankavat', '222', 'drankavat@example.com');
        
        expect(employee.getName()).toEqual('Droan Rankavat');
    })
});

describe("getId", () => {
    it("should return the ID number from the object", () => {
        const employee = new Employee('Droan Rankavat', '222', 'drankavat@example.com');
        
        expect(employee.getId()).toEqual('222');
    })
}); 

describe("getEmail", () => {
    it("should return the email address from the object", () => {
        const employee = new Employee('Droan Rankavat', '222', 'drankavat@example.com');
        
        expect(employee.getEmail()).toEqual('drankavat@example.com');
    })
});

describe('getRole', () => {
    it("should return the role as 'Employee'", () => {
        const employee = new Employee('Droan Rankavat', '222', 'drankavat@example.com');
        
        expect(employee.getRole()).toEqual('Employee');
    })
});
});