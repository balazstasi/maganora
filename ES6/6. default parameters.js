function isEqualTo(number, compare = 5) {
  return number == compare
}

// console.log(isEqualTo(10, 10))

function isEqualTo2(number = 10, compare = number) {
  console.log(number)
  console.log(compare)
  return number == compare
}
// itt ugye az elsot setteljuk, szoval felulirja a defaultot
console.log(isEqualTo2(5))

