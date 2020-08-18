let numbers = [1,2,3,4,5]

// eloszor ... nelkul csinald
function sumUp(...toAdd) {
  let result = 0
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i]
  }
  return result
}

console.log(sumUp(numbers))

// neha nincs 1 tombunk es nem tudjuk elore mennyi elemunk lesz stb

console.log(sumUp(100, 10, 20))
