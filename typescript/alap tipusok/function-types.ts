// arra utal hogy milyen tipust kell visszaadnia a fg-nek
// ebben az esetben szamot, ha stringet adnenk pl vissza, errort dobna
function add(a: number, b: number): number {
  return a + b;
}

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}
addAndHandle(10, 20, (result: number) => {
  console.log(result);
  // return result; ha fentebb => number szerepelne
});

// function printNum(num: number): void => {console.log(num)}
const printNum = (num: number): void => {
  console.log(num);
};
addAndHandle(1, 2, printNum);
