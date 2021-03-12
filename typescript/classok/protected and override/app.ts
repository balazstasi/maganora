class Department {
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name + " with id: " + this.id);
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

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class ProgrammingDepartment extends ITDepartment {
  constructor(id: string, private programmers: string[]) {
    super(id, ["Jakab"]);
  }
}

class AccountingDepartment extends Department {
  // private reports: string[] = []
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    // this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Balazs") {
      return;
    }
    this.employees.push(name);
  }
}

const it = new ITDepartment("it1", ["Balazs"]);
it.addEmployee("Balazs");
it.addEmployee("Jakab");
it.describe();
it.name = "NEW NAME";
