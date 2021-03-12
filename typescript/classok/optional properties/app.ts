interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log("Hello " + this.name);
    } else {
      console.log("Hi!!!");
    }
  }
}

let user: Greetable;

user = new Person();

user.greet("Hello I am ");

const obj = {
  name: "HELLO",
};
