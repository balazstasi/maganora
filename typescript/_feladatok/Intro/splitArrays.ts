// [1, 2, 3, 4, 5] => [1, 2, 3] [4, 5]
// [1, 2, 3, 4] => [1, 2] [3, 4]

function splitList(values: number[]) {
  return [values.splice(0, Math.ceil(values.length / 2)), values];
}

console.log(splitList([1, 2, 3, 4, 5]));
