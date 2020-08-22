# Feladat 01

### Infók

**Utasítások**: Oldd meg az alábbi kérések szerint a feladatot, és küldd el nekem a kész projektet egy .zip-ben emailben.

**El ne felejtsd előtte kitörölni a node_modules mappát!!!**

A projektet a mappába be cd-zve az npm install && npm start paranccsal tudod elindítani. Két db komponens van az applikációban: Counter és App. A lenti utasítások segítenek majd a kód szerkesztésében, komponensek hozzáadásában, hogy megfeleljenek a kéréseknek.

### Feladatok

1. A data tömb szerint renderelj le 3 darab `Countert` és használd fel propként az összes mezőjét megfelelően a `data` objektumainak!
2. Szerkeszd meg a `Counter` komponenst úgy, hogy megkapja az `onIncrement` és az `onDecrement` callback-eket, mint propokat és biztosítsd, hogy külön-külön növeljék a számlálók értékét! Mindegyik callback egyetlen integer számot kell kapjon paraméterül, ami az a mennyiség, amennyivel növelni akarjuk a számláló meglévő értékét! (Tipp: használj `this.forceupdate()`)
3. Helyezd át a globális `data` tömböt az `App` statejébe
4. Renderelj egy negyedik `Counter` komponenst, és biztosítsd, hogy az értéke külön változik a többitől!
5. Készíts egy `Total` komponenst, ami rendereli az összest `Counter` komponenst, és még egy mezőt, ami kiírja az összes `Counter` értékének összegét! Tehát ne az `App`ban legyenek a `Counter`ek, hanem a `Total`ban.
6. Készíts egy másolatot az eddigi feladatok megoldása utáni `Counter`ről, hogy később ellenőrizni tudjam az eddig megoldott feladatokat! Ezt a fájlt nevezd el mondjuk Counter_copy.js-nek! El ne felejtsd a class nevét ir átírni! Az eredeti `Counter`rel pedig oldd meg a következő feladatokat:
   - töröld ki az `onIncrement` és `onDecrement` propokat
   - adj meg a kettő eddigi helyett egyetlen `onChange` callback propot ami egy integer paramétert vár
   - biztosítsd, hogy így is az összes `Counter` ugyanúgy működik, mint ezelőtt
