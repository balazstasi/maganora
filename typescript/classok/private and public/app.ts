class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees.length, this.employees);
  }

  getEmployees() {
    return this.employees;
  }
}

const accounting = new Department("Accounting");

console.log(accounting.name);

accounting.addEmployee("Balazs");
accounting.addEmployee("Tamas");

accounting.describe();
accounting.name = "New Name";
accounting.printEmployees();
