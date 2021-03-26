import assert = require("assert");

/*
    * [Nehezseg: ELEMENTARY]
    *    Legkozelebbi ertek

  TODO:
  Talald meg a legkozelebbi erteket a megadotthoz. 
  Kapsz egy tombot, es onnan a megadotthoz legkozelebbi erteket kell megekresned. 
  PL: 4, 7, 10, 11, 12, 17, keressuk a legkozelebbit a kovihez: 9. 
  Ha elkezdjuk sorbajarni az elejerol a szamokat, akkor megkapjuk, hogy a 7 meg a 10 van legkozelebb, 
  egyik csokkenobol, masik novekvobok. De 10 az kozelebb van 1-gyel a 9-hez mint a 7, tehat a 10 a helyes valasz

  Nehany dolog tisztazasa:

  Ha 2 szam egyforma tavra van, a kisebbet valaszd;
  SOha nem ures a megadott tomb, tehat azt nem szukseges lekezelni;
  Lehetseges az is, hogy a megadott szam eleme a tombnek, ilyenkor o maga a helyes valasz;
  Lehet az tombben mind negativ, mind pozitiv szam, viszont mind egesz, szam tehat nem kell olyat kezelni, hogy 1.6 stb;
  A tomb NEM rendezett, es nincsenek benne duplak, ez kis segitseg is egyben egy hatekony megoldashoz ;)
  
  ? minden feladatot a tanultak alapjan ugy futtathatsz, hogy:
    ? Ha nincs feltelpitve a typescript akkor: npm install -g typescript 
    ?    Compile: tsc <fajnlev>
    ?    Run: node <fajlnev>
  ? es a konzolon mar lathatod is az eredmenyt.

  BONUSZ A HELYES TIPUSOZASERT, bemenet kimenet
*/

function nearestValue(values: number[], search: number): number {
  // ide a kodod
  return 0;
}

// TESZTELESHEZ - ne nyulj hozza, mert maskepp nem fog mukodni a tesztelese az eredmenynek
try {
  assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
  assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
  assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
  assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
  assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
  assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
  assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);

  console.log("✅Siker✅");
} catch (err) {
  console.log(console.log(err));
  console.log("❌Hibas Eredmeny❌");
}
