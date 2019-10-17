'use strict';

const Employee = require('./Employee');

class Manager extends Employee {
    constructor({name, id, email, officeNumber}) {
        
        super(name, id, email, 'Manager')
        // super(name, id, email) 

        this.officeNumber = officeNumber
    }

    getDetail() {
        return this.officeNumber
    }
}

module.exports = Manager;