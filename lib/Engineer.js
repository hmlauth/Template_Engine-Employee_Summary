'use strict';

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({name, id, email, github}) {
        super(name, id, email, 'Engineer')
        this.github = github
    }

    getDetail() {
        return this.github
    }
}

module.exports = Engineer