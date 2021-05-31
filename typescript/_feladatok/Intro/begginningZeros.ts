function beginningZeros(text: string): number {
  let numZeros = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "0") {
      numZeros++;
    } else {
      break;
    }
  }

  return numZeros;
}

console.log(beginningZeros("101010"));
