"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // public name: string;
        this.employees = [];
        // this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name + " with id: " + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees.length, this.employees);
    };
    Department.prototype.getEmployees = function () {
        return this.employees;
    };
    return Department;
}());
var accounting = new Department(Math.random().toString(), "Accounting");
accounting.describe();
