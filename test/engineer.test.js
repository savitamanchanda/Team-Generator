const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe("Initialization", () => {   
        it("should create an object with a name, id, email, github if provided valid arguments", () => {
            const engineer = new Engineer('Droan Rankavat', '222', 'drankavat@example.com', 'drankavat');
            
            expect(engineer.name).toEqual('Droan Rankavat');
            expect(engineer.id).toEqual('222');
            expect(engineer.email).toEqual('drankavat@example.com');
            expect(engineer.github).toEqual('drankavat');

  });

});

describe("getName", () => {
    it("should return the name from the object", () => {
        const engineer = new Engineer('Droan Rankavat', '222', 'drankavat@example.com', 'drankavat');
        
        expect(engineer.getName()).toEqual('Droan Rankavat');
    })
});

describe("getId", () => {
    it("should return the ID number from the object", () => {
        const engineer = new Engineer('Droan Rankavat', '222', 'drankavat@example.com', 'drankavat');
        
        expect(engineer.getId()).toEqual('222');
    })
}); 

describe("getEmail", () => {
    it("should return the email address from the object", () => {
        const engineer = new Engineer('Droan Rankavat', '222', 'drankavat@example.com', 'drankavat');
        
        expect(engineer.getEmail()).toEqual('drankavat@example.com');
    })
});

describe("getGithub", () => {
    it("should return the Github username from the object", () => {
        const engineer = new Engineer('Droan Rankavat', '222', 'drankavat@example.com', 'drankavat');
        
        expect(engineer.getGithub()).toEqual('drankavat');
    })
});

describe('getRole', () => {
    it("should return the role as 'Engineer'", () => {
        const engineer = new Engineer('Droan Rankavat', '222', 'drankavat@example.com', 'drankavat');
        
        expect(engineer.getRole()).toEqual('Engineer');
    })
});
});