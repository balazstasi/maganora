var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
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
var accounting = new Department("Accounting");
console.log(accounting.name);
accounting.addEmployee("Balazs");
accounting.addEmployee("Tamas");
accounting.describe();
accounting.name = "New Name";
accounting.printEmployees();
