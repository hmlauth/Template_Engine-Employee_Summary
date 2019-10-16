'use strict';

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }

    getDetail() {
        return this.officeNumber
    }
}

module.exports = Manager;