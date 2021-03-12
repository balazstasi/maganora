"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name + " " + this.age);
    };
    return Person;
}());
var user1;
user1 = new Person("Peter");
user1.greet("Hello I am");
