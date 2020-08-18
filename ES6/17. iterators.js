let numbers = [1, 2, 3]

console.log(typeof numbers[Symbol.iterator]) // Output: function

let it = numbers[Symbol.iterator]()

console.log(it) // Output: [object Array Iterator]

console.log(it.next(), it.next(), it.next(), it.next())

// Miert hasznos? Barmilyen objektumot iterabilissa tudunk tenni ezaltal a beepitett symbol altal, tehat a mi objektumaink is pl vegigjarhatoak egy forral stb, ha implementaljuk ezt a fg-t
// Vagy pedig mar meglevo objektumoknak irhatjuk felul a viselkedeset, pl teljesen megvaltoztathatjuk, hogy hogy mukodjon  egy for ciklus a tombok eseteben, vagy akarmit

let array = [1, 2, 3]

// eloszor ezt:
// array[Symbol.iterator] = function() {
//   return {
//     next: function() {
//       return {
//         done: false,
//         value: 10
//       }
//     }
//   }
// }

array[Symbol.iterator] = function() {
  let nextValue = 10
  return {
    next: function() {
      nextValue++;
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue
      }
    }
  }
}

for (let element of array) {
  console.log(element)
}

// eloszor ezt
// it = array[Symbol.iterator]();

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

