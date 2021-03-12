var DepartmentShort = /** @class */ (function () {
    function DepartmentShort(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    return DepartmentShort;
}());
var accountingNew = new DepartmentShort("d1", "Accounting");
console.log(accountingNew.name);
