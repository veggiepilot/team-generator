const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    //Positive Test
    it("should create an object with 'name', 'id', 'email' and 'school' properties set to the 'name', 'id,'email' and 'school' arguments provided when called with the 'new' keyword", () => {
        // Arrange
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const school = 'GCA';

      // Act
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.name).toEqual(name);
    })
  
    it ("should return 'school' when the getSchool() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const school = 'GCA';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getSchool()).toEqual(school);
    })
  
    it ("should return 'id' when the getID() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const school = 'GCA';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getID()).toEqual(id);
    })
  
    it ("should return 'email' when the getEmail() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const school = 'GCA';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getEmail()).toEqual(email);
    })
  
    it ("should return the object when the getRole() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const school = 'GCA';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getRole()).toEqual(new Intern(name, id, email, school));
    })
    
  })