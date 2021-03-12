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
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        // 1. biztonsagosabb, mert bekapszulazzuk egy fg-be
        // 2. plusz logikat vezethetunk be a lekereshez
        _this.reports = [];
        _this.reports = reports;
        _this.firstReport = reports[0];
        return _this;
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
    Object.defineProperty(AccountingDepartment.prototype, "firstReportAdded", {
        get: function () {
            if (this.firstReport) {
                return this.firstReport;
            }
            throw new Error("No Report Found!");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass a valid value!");
            }
            this.addReport(value);
            this.firstReport = this.reports[this.reports.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting - ID: " + this.id);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment("a2", []);
accounting.describe();
