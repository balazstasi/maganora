import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// A React app belepesi pontja, lerenderelodik az App.js fajlban talalhato App class
ReactDOM.render(<App />, document.getElementById('root'));

// Class magyarazas
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log("The animal's name is:", this.name, "and it's", this.age, "years old!");
//     }
// }
//
// class Lion extends Animal {
//     constructor(name, age, furColor, speed) {
//         super(name, age);
//         this.furColor = furColor;
//         this.speed = speed;
//     }

//     roar() {
//         console.log(
//             'ROAR, my fur color is',
//             this.furColor,
//             'fur, and I can run',
//             this.speed,
//             'kms an hour'
//         )
//     }
// }

// const animal1 = new Animal('Simba', 3);
// animal1.speak();
// console.log(animal1);
// const animal2 = new Lion('Mufasa', 20, 'golden', 25)
// animal2.roar();
// console.log(animal2);

