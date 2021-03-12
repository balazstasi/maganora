"use strict";
var user1;
user1 = {
    name: "Gipsz Jakab",
    age: 30,
    greet: function (phrase) {
        console.log(phrase + " " + this.name + " " + this.age);
    },
};
user1.greet("Hey my name and age is");
