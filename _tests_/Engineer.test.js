const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    //Positive Test
    it("should create an object with 'name', 'id', 'email' and 'github' properties set to the 'name', 'id,'email' and 'github' arguments provided when called with the 'new' keyword", () => {
        // Arrange
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const github = 'veggiepilot';

      // Act
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.name).toEqual(name);
    })
  
    it ("should return 'github' when the getGithub() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const github = 'veggiepilot';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getGithub()).toEqual(github);
    })
  
    it ("should return 'id' when the getID() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const github = 'veggiepilot';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getID()).toEqual(id);
    })
  
    it ("should return 'email' when the getEmail() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const github = 'veggiepilot';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getEmail()).toEqual(email);
    })
  
    it ("should return the object when the getRole() method is called using the instantiated object", () => {
  
      const name  = 'Johannes';
      const id    = 5;
      const email = 'johannes@gmail.com';
      const github = 'veggiepilot';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getRole()).toEqual(new Engineer(name, id, email, github));
    })
    
  })