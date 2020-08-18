class User {
  // statikus osztalyszintu metodusok, amik peldanyositas nelkul is meghivhatoak pl User.sayHi
  static sayHi() {
    alert("Hi unnamed!")
  }

  constructor(name) {
    this.name = name;
    this.amountCreated++
  }

  sayHi() {
    alert(this.name);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

// Usage:
let user = new User("John")
let user2 = new User("John2")
user.sayHi()
User.sayHi()

// Builtin classokat is extendelhetunk
class ConvertableArray extends Array {
  convert() {
    let returnArray = []
    this.forEach(value => returnArray.push('Converted' + value))
    return returnArray
  }
}

let numberArray = new ConvertableArray();
numberArray.push(1)
numberArray.push(2)
numberArray.push(3)
numberArray.push(4)

console.log(numberArray.convert())



