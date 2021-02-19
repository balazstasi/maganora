function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Bad Types Given!");
  }
  return a + b;
}
let num;
num = "a";
num = 125;
console.log(add(5, "a"));
