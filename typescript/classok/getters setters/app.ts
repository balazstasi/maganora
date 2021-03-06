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

class AccountingDepartment extends Department {
  private firstReport: string;

  // 1. biztonsagosabb, mert bekapszulazzuk egy fg-be
  // 2. plusz logikat vezethetunk be a lekereshez

  private reports: string[] = [];
  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.firstReport = reports[0];
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

  set firstReportAdded(value: string) {
    if (!value) {
      throw new Error("Please pass a valid value!");
    }
    this.addReport(value);
    this.firstReport = this.reports[this.reports.length - 1];
  }

  get firstReportAdded() {
    if (this.firstReport) {
      return this.firstReport;
    }
    throw new Error("No Report Found!");
  }
}

const accounting = new AccountingDepartment("a2", []);

accounting.firstReportAdded = "Year End Report";
console.log(accounting.firstReportAdded);
accounting.firstReportAdded = "Year End Report 2";
console.log(accounting.firstReportAdded);
accounting.firstReportAdded = "Year End Report 3";
console.log(accounting.firstReportAdded);
