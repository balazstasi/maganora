function allTheSame(elements: any[]): boolean {
  const first = elements[0];

  for (let i = 1; i < elements.length; i++) {
    if (first !== elements[i]) {
      return false;
    }
  }

  return true;
}

function allTheSameEvery(elements: any[]): boolean {
  return elements.every((currentElement) => currentElement === elements[0]);
}

function allTheSameSets(elements: any[]): boolean {
  const setOfElements = new Set(elements); // [1, 1, 1] -> {1}
  return setOfElements.size === 1;
}

console.log(allTheSameEvery([1, 1, 1]));
console.log(allTheSame([1, 1, 2]));
console.log(allTheSame(["a", "a", "a"]));
console.log(allTheSameEvery([false, true]));
console.log(allTheSame([]));
