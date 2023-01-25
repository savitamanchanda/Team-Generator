const Intern = require('../lib/intern');

describe('Intern', () => {
    describe("Initialization", () => {   
        it("should create an object with a name, id, email, school if provided valid arguments", () => {
            const intern = new Intern('Droan Rankavat', '222', 'drankavat@example.com', 'Columbia University');
            
            expect(intern.name).toEqual('Droan Rankavat');
            expect(intern.id).toEqual('222');
            expect(intern.email).toEqual('drankavat@example.com');
            expect(intern.school).toEqual('Columbia University');

  });

});

describe("getName", () => {
    it("should return the name from the object", () => {
        const intern = new Intern('Droan Rankavat', '222', 'drankavat@example.com', 'Columbia University');
        
        expect(intern.getName()).toEqual('Droan Rankavat');
    })
});

describe("getId", () => {
    it("should return the ID number from the object", () => {
        const intern = new Intern('Droan Rankavat', '222', 'drankavat@example.com', 'Columbia University');
        
        expect(intern.getId()).toEqual('222');
    })
}); 

describe("getEmail", () => {
    it("should return the email address from the object", () => {
        const intern = new Intern('Droan Rankavat', '222', 'drankavat@example.com', 'Columbia University');
        
        expect(intern.getEmail()).toEqual('drankavat@example.com');
    })
});

describe("getSchool", () => {
    it("should return the school name from the object", () => {
        const intern = new Intern('Droan Rankavat', '222', 'drankavat@example.com', 'Columbia University');
        
        expect(intern.getSchool()).toEqual('Columbia University');
    })
});

describe('getRole', () => {
    it("should return the role as 'Intern'", () => {
        const intern = new Intern('Droan Rankavat', '222', 'drankavat@example.com', 'Columbia University');
        
        expect(intern.getRole()).toEqual('Intern');
    })
});
});