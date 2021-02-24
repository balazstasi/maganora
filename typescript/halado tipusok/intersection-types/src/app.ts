type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Balazs",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numberic = boolean | number;

type Universal = Combinable & Numberic; // string | number | boolean
