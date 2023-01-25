const Manager = require("../lib/manager");

describe('Manager', () => {
    describe("Initialization", () => {   
        it("should create an object with a name, id, email, officeNum if provided valid arguments", () => {
            const manager = new Manager('Droan Rankavat', '222', 'drankavat@example.com', '122');
            
            expect(manager.name).toEqual('Droan Rankavat');
            expect(manager.id).toEqual('222');
            expect(manager.email).toEqual('drankavat@example.com');
            expect(manager.officeNum).toEqual('122');

  });

});

describe("getName", () => {
    it("should return the name from the object", () => {
        const manager = new Manager('Droan Rankavat', '222', 'drankavat@example.com', '122');
        
        expect(manager.getName()).toEqual('Droan Rankavat');
    })
});

describe("getId", () => {
    it("should return the ID number from the object", () => {
        const manager = new Manager('Droan Rankavat', '222', 'drankavat@example.com', '122');
        
        expect(manager.getId()).toEqual('222');
    })
}); 

describe("getEmail", () => {
    it("should return the email address from the object", () => {
        const manager = new Manager('Droan Rankavat', '222', 'drankavat@example.com', '122');
        
        expect(manager.getEmail()).toEqual('drankavat@example.com');
    })
});

describe("getOfficeNum", () => {
    it("should return the office number from the object", () => {
        const manager = new Manager('Droan Rankavat', '222', 'drankavat@example.com', '122');
        
        expect(manager.getOfficeNum()).toEqual('122');
    })
});

describe('getRole', () => {
    it("should return the role as 'Manager'", () => {
        const manager = new Manager('Droan Rankavat', '222', 'drankavat@example.com', '122');
        
        expect(manager.getRole()).toEqual('Manager');
    })
});
});