import assert = require("assert");
/*
    * [Nehezseg: ELEMENTARY]
    *    Kicsomagolas

    TODO:
    Irj egy fuggvenyt, ami megkap egy barmilyen hosszusagu tombot, es visszaad egy 3 elemu tuplet, amiben (ilyen sorrendben) az 1. 3. visszafele a 2. elemek szerepelnek. Lejjebb lathatod majd a teszteket azokat nem modositsd, ha sikeresen lefutnak kesz a felcsi:)
    
    ? Bonusz pont a helyes tipusozasert, de ez nem muszaj :D (nem anyt hasznalunk, megadjuk a kimenet tipusat stb)

    ? minden feladatot a tanultak alapjan ugy futtathatsz, hogy:
    ? Ha nincs feltelpitve a typescript akkor: npm install -g typescript 
    ?    Compile: tsc <fajnlev>
    ?    Run: node <fajlnev>
    ? es a konzolon mar lathatod is az eredmenyt.
*/

// ezt a fuggvenyt valositsd meg:
function easyUnpack(arr: any[]) {}

// TESZTELESHEZ - ne nyulj hozza, mert maskepp nem fog mukodni a tesztelese az eredmenynek
try {
  assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 3, 7]);
  console.log("✅Siker✅");
} catch (err) {
  console.log("❌Hibas Eredmeny❌");
  console.log(console.log(err));
}
