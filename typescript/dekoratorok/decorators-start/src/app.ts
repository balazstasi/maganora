function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Semmi";

  constructor() {
    console.log("Creating person class");
  }
}

const person = new Person();
console.log(person);
