class Employee {
    constructor(name, id, email) {
        this.name  = name;
        this.id    = id;
        this.email = email;
    }

    getName() {
    }

    getID() {
    }

    getEmail() {
    }

    getRole() {
        return this;
    }
}

module.exports = Employee;