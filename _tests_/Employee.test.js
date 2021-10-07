const Employee = require('../lib/Employee.js');

describe("Employee", () => {
  //Positive Test
  it("should create an object with 'name', 'id' and 'email' properties set to the 'name', 'id, and 'email' arguments provided when called with the 'new' keyword", () => {
      // Arrange
    const name  = 'Johannes';
    const id    = 5;
    const email = 'johannes@gmail.com';

    // Act
    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.name).toEqual(name);
  })

  it ("should return 'name' when the getName() method is called using the instantiated object", () => {

    const name  = 'Johannes';
    const id    = 5;
    const email = 'johannes@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getName()).toEqual(name);
  })

  it ("should return 'id' when the getID() method is called using the instantiated object", () => {

    const name  = 'Johannes';
    const id    = 5;
    const email = 'johannes@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getID()).toEqual(id);
  })

  it ("should return 'email' when the getEmail() method is called using the instantiated object", () => {

    const name  = 'Johannes';
    const id    = 5;
    const email = 'johannes@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getEmail()).toEqual(email);
  })

  it ("should return the object when the getRole() method is called using the instantiated object", () => {

    const name  = 'Johannes';
    const id    = 5;
    const email = 'johannes@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getRole()).toEqual(new Employee(name, id, email));
  })
  
})