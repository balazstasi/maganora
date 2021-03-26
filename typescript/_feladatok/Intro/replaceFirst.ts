import assert = require("assert");
/*
    * [Nehezseg: ELEMENTARY]
    *    Csere

    TODO:
    Tedd az elso elemet a bemeneti tombben az utolso helyre, tehat: [-1-, 2, 3, 4] => [2, 3, 4, -1-]
    
    ? Bonusz pont a helyes tipusozasert, de ez nem muszaj :D (nem anyt hasznalunk, megadjuk a kimenet tipusat stb)

    ? minden feladatot a tanultak alapjan ugy futtathatsz, hogy:
    ? Ha nincs feltelpitve a typescript akkor: npm install -g typescript 
    ?    Compile: tsc <fajnlev>
    ?    Run: node <fajlnev>
    ? es a konzolon mar lathatod is az eredmenyt.
*/

function replaceFirst(numbers: any[]) {}

// TESZTELESHEZ - ne nyulj hozza, mert maskepp nem fog mukodni a tesztelese az eredmenynek
try {
  assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
  assert.deepEqual(replaceFirst([1]), [1]);
  assert.deepEqual(replaceFirst([]), []);
  console.log("✅Siker✅");
} catch (err) {
  console.log("❌Hibas Eredmeny❌");
  console.log(console.log(err));
}
