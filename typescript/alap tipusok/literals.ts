// Type Aliases - Tipus Becenevek
type NumStr = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  // input1: number | string,
  input1: NumStr,
  input2: NumStr,
  // ugyanaz mint a unionok peldaul, csak tipusok helyett KONKRET ertekek kozul kell valasztani
  // resultConversion: "as-number" | "as-text"
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedStringNumber = combine(30, 26, "as-number");
console.log(combinedStringNumber);

const combinedStringNumbers = combine("10", "30", "as-number");
console.log(combinedStringNumbers);

const combinedStrings = combine("Tasi", "Balazs", "as-text");
console.log(combinedStrings);
