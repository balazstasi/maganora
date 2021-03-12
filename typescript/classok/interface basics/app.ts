interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Gipsz Jakab",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name + " " + this.age);
  },
};

user1.greet("Hey my name and age is");
