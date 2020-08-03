//jshint esnext:true

function fn() {
  console.log("Regular function")
}
fn()

var fnArrow = () => {
  console.log("Arrow function")
}
fnArrow()


var fnOneLiner = () => console.log("Oneliner")
fnOneLiner()

var fn2 = () => "Hello"
console.log(fn2())
//ugyanaz mint
function fn2Long() {
  return "Hello"
}

var sum = (a, b) => {
  return a + b
}
console.log(sum(3,5))
//vagy
var sum2 = (a, b) => a + b
console.log(sum2(10, 11))

var product10 = a => a * 10
console.log(product10(5))
console.log(product10(5, 1, 3, 4))

// callback
setTimeout(() => console.log("callback"), 3000)