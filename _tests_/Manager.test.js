const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    //Positive Test
    it("should create an object with 'name', 'id', 'email' and 'officeNumber' properties set to the 'name', 'id,'email' and 'officeNumber' arguments provided when called with the 'new' keyword", () => {
        // Arrange
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const officeNumber = 3;

      // Act
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.name).toEqual(name);
    })
  
    it ("should return 'officeNumber' when the getOfficeNumber() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const officeNumber = 3;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    })
  
    it ("should return 'id' when the getID() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const officeNumber = 3;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getID()).toEqual(id);
    })
  
    it ("should return 'email' when the getEmail() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const officeNumber = 3;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getEmail()).toEqual(email);
    })
  
    it ("should return the object when the getRole() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const officeNumber = 3;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getRole()).toEqual(new Manager(name, id, email, officeNumber));
    })
    
  })