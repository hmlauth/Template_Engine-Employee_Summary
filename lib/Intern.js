'use strict';

const Employee = require('./Employee');

class Intern extends Employee {
    constructor( {name, id, email, school}) {
        super(name, id, email, "Intern")
        this.school = school
    }

    getRole() {
        return this.title
    }

    getDetail() {
        return this.school
    }
}

module.exports = Intern