const AGE = 27;
const AGES = [27, 92, 21]

console.log(AGES)

// Referencia tipis, a push-sal az erteket valtoztatjuk nem a pointert
AGES.push(1)

console.log(AGES)

const OBJ = {
  age: 27
}
OBJ.age = 20
console.log(OBJ)