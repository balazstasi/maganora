import assert = require("assert");

// interface Stock {
//   name: string;
//   price: number;
// }

// const data = [
//   { name: "wine", price: 138 },
//   { name: "bread", price: 100 },
//   { name: "meat", price: 15 },
//   { name: "water", price: 1 },
// ];

// function switchOutMax(result: Array<any>, toBeChecked: any): Array<any> {
//   let finalResult = [...result];
//   const minResult = result.sort((a, b) => a.price - b.price)[0];
//   const minIndex = finalResult.findIndex((data) => isObjectEqual(data, minResult));
//   if (minResult.price < toBeChecked.price) {
//     finalResult[minIndex] = toBeChecked;
//   }

//   return finalResult;
// }

// function biggerPrice(amount: number, data: any[]): Array<any> {
//   let result: Array<any> = [];

//   // ellenorizzuk hogyha tul nagy amountot adunk meg,
//   // akkor teritse vissza tombot ugy ah van es lepjen ki
//   if (amount > data.length) return data;

//   for (let i = 0; i < amount; i++) {
//     result.push(data[i]);
//   }
//   for (let i = amount; i < data.length; i++) {
//     result = switchOutMax(result, data[i]);
//   }

//   return result;
// }

// console.log(
//   biggerPrice(2, [
//     { name: "bread", price: 100 },
//     { name: "wine", price: 138 },
//     { name: "meat", price: 15 },
//     { name: "water", price: 1 },
//   ])
// );

// console.log(
//   biggerPrice(2, [
//     { name: "bread", price: 100 },
//     { name: "wine", price: 138 },
//     { name: "meat", price: 15 },
//     { name: "water", price: 1 },
//   ])
// );

// assert.deepEqual(
//   biggerPrice(2, [
//     { name: "bread", price: 100 },
//     { name: "wine", price: 138 },
//     { name: "meat", price: 15 },
//     { name: "water", price: 1 },
//   ]),
//   [
//     { name: "wine", price: 138 },
//     { name: "bread", price: 100 },
//   ]
// );
// assert.deepEqual(
//   biggerPrice(1, [
//     { name: "pen", price: 5 },
//     { name: "whiteboard", price: 170 },
//   ]),
//   [{ name: "whiteboard", price: 170 }]
// );

function isObjectEqual(obj1: any, obj2: any) {
  return obj1.price === obj2.price && obj1.name === obj2.name;
}

function getMax(amount: any, data: any[]): any[] {
  let result = [];
  let dataCopy = [...data];
  for (let i = 0; i < amount; i++) {
    const newMax = dataCopy.sort((a, b) => a.price - b.price)[dataCopy.length - 1];
    const newMaxIndex = dataCopy.findIndex((data) => isObjectEqual(data, newMax));
    result.push(newMax);
    dataCopy.splice(newMaxIndex, 1);
  }
  return result;
}

console.log(
  getMax(2, [
    { name: "bread", price: 100 },
    { name: "wine", price: 138 },
    { name: "meat", price: 15 },
    { name: "water", price: 1 },
  ])
);
