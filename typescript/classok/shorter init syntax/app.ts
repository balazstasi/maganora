class DepartmentShort {
  private employees: string[] = [];
  // private id;
  // public name;

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }
}

const accountingNew = new DepartmentShort("d1", "Accounting");

console.log(accountingNew.name);
