class Employee {
    constructor(name, id, email, title = 'Employee') {
        this.name = name,
        this.id = id,
        this.email = email,
        this.title = title
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.title
    }
}

module.exports = Employee;