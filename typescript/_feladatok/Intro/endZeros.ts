import assert = require("assert");

/*
    * [Nehezseg: ELEMENTARY]
    *    Zerok a vegen

  TODO:
  Irj egy fuggvenyt, ami megadja, hogy egy adott szoveg/szam vegen hany darab 0 szerepel
  
  ? minden feladatot a tanultak alapjan ugy futtathatsz, hogy:
    ? Ha nincs feltelpitve a typescript akkor: npm install -g typescript 
    ?    Compile: tsc <fajnlev>
    ?    Run: node <fajlnev>
  ? es a konzolon mar lathatod is az eredmenyt.

  BONUSZ A HELYES TIPUSOZASERT, bemenet kimenet
*/

function endZeros(value: string | number): number {
  let valueCopy = value;
  if (typeof valueCopy === "string") {
    valueCopy = +valueCopy;
  }

  let count = 0;

  while (valueCopy % 10 === 0) {
    valueCopy = valueCopy / 10;
    count++;
    if (valueCopy === 0) break;
  }

  return count;
}

let check = true;
if (endZeros(0) !== 1) check = false;
if (endZeros(10) !== 1) check = false;
if (endZeros("100100") !== 2) check = false;
if (endZeros(0) !== 1) check = false;
if (endZeros(0) !== 1) check = false;
if (check) {
  console.log("SIKER");
} else console.log("Hibas eredmeny");

// tesztek - ne nyulj hozza
try {
  assert.equal(endZeros(0), 1);
  assert.equal(endZeros(1), 0);
  assert.equal(endZeros(10), 1);
  assert.equal(endZeros(101), 0);
  assert.equal(endZeros(245), 0);
  assert.equal(endZeros(100100), 2);
  assert.equal(endZeros("245"), 0);
  assert.equal(endZeros(1001), 2);
  assert.equal(endZeros("100100"), 2);
  console.log("✅Siker✅");
} catch (err) {
  console.log("❌Hibas Eredmeny❌");
  console.log(console.log(err));
}
