function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGIN PERSON CLASS")
class Person {
  name = "Semmi";

  constructor() {
    console.log("Creating person class");
  }
}

const person = new Person();
console.log(person);
