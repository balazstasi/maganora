function add(a: number, b: number) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Bad Types Given!");
  }
  return a + b;
}

// let num: number;
// num = "a";

// console.log(add(5, "a"));
