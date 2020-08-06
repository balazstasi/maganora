class User {
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


