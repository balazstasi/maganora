function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("TEMPLATE FACTORY");

    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    console.log(hookElement);
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Tamas";

  constructor() {
    console.log("Creating person class");
  }
}

const person = new Person();
console.log(person);

/// Another decortators

function Log1(target: any, name: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, name);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
  console.log("PArameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log1
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
