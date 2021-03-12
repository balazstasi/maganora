"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log("Hello " + this.name);
        }
        else {
            console.log("Hi!!!");
        }
    };
    return Person;
}());
var user;
user = new Person();
user.greet("Hello I am ");
var obj = {
    name: "HELLO",
};
