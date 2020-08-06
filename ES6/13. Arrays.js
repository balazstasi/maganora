const someArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Smith" },
  { id: 3, name: "Bob" },
]
someArray.find(element => element.id === 2)
//-------> Output : {id: 2, name: "Smith"}

const someArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Smith" },
  { id: 3, name: "Bob" },
]
someArray.find(element => element.id === 2)
//-------> Output : 2

const someArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Smith" },
  { id: 3, name: "Bob" },
]
myAwesomeArray.forEach(element => console.log(element.name))
//Output : John, Smith, Bob

const someArray = [1, 2, 3, 4]
someArray.map(x => x * x)
// Output: 1, 4, 9, 16

const someArray = [1, [2, 3], [4, 5]]
someArray.flat()
//Output: [1, 2, 3, 4, 5]

const someArray = [[1], [2], [3], [4], [5]]
someArray.flatMap(a => a * 10)
//Output: [10, 20, 30, 40, 50]

const someArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Smith" },
  { id: 3, name: "Bob" },
]
someArray.filter(element => element.name === "Bob")
//Output: 0:{id: 3, name: "Bob"}

const someArray = [4, 1, 3, 2]
// Sort from smallest to largest
someArray.sort((a, b) => a - b)
//Output : [1, 2, 3, 4]
// Sort from largest to smallest
myAwesomeArray.sort((a, b) => b - a)
//Output : [4, 3, 2, 1]

const someArray = ["Tesla", "Audi", "BMW"]
console.log(someArray.unshift("Toyota"));
//output: "4"
console.log(someArray);
//output: Array ["Toyota", "Tesla", Audi", "BMW"]


// also pop, shift, push
const array1 = ['B', 'a', 'l', 'a'];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 'Balazs'));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
