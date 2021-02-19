function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedStringNumber = combine(30, 26, "as-number");
console.log(combinedStringNumber);
var combinedStringNumbers = combine("10", "30", "as-number");
console.log(combinedStringNumbers);
var combinedStrings = combine("Tasi", "Balazs", "as-text");
console.log(combinedStrings);
