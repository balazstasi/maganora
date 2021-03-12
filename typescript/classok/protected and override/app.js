"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var ProgrammingDepartment = /** @class */ (function (_super) {
    __extends(ProgrammingDepartment, _super);
    function ProgrammingDepartment(id, programmers) {
        var _this = _super.call(this, id, ["Jakab"]) || this;
        _this.programmers = programmers;
        return _this;
    }
    return ProgrammingDepartment;
}(ITDepartment));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // private reports: string[] = []
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
        // this.reports = reports;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Balazs") {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment("it1", ["Balazs"]);
it.addEmployee("Balazs");
it.addEmployee("Jakab");
it.describe();
it.name = "NEW NAME";
