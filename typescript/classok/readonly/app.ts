class Department {
  // public name: string;
  private employees: string[] = [];

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

const accounting = new Department(Math.random().toString(), "Accounting");

accounting.describe();
