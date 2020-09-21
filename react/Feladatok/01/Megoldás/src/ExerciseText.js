import React from "react";

export default function ExerciseText() {
  return (
    <div>
      <h1>Feladat 01</h1>
      <span>
        Itt találod a feladat leírását, és külön a README.md fájlban is
      </span>
      <div>
        <strong>Utasítások:</strong> Oldd meg az alábbi kérések szerint a
        feladatot, és küldd el nekem a kész projektet egy .zip-be csomagolva{" "}
        <a href="mailto:balazstasi@tuta.io">emailben</a>.<br></br>
        <p className="node_modules">
          El ne felejtsd előtte kitörölni a node_modules mappát!!!
        </p>
        <br></br>A projektet, a mappába be cd-zve, az{" "}
        <code>npm install && npm start</code> paranccsal tudod elindítani.
      </div>
      <div>
        Két db komponens van az applikációban: <strong>Counter</strong> és{" "}
        <strong>App</strong>. <br></br>A lenti utasítások segítenek majd a kód
        szerkesztésében, komponensek hozzáadásában, hogy megfeleljenek a
        kéréseknek.
      </div>
      <ol className="instructions">
        <li>
          A <code>data</code> tömb szerint renderelj le 3 darab{" "}
          <code>Counter</code>t! Használd fel <strong>propként</strong> az
          összes mezőjét megfelelően a <code>data</code> objektumainak!
        </li>
        <li>
          Szerkeszd meg a <code>Counter</code> komponenst úgy, hogy megkapja az{" "}
          <code>onIncrement</code> és az <code>onDecrement</code> callback-eket,
          mint <strong>propokat</strong>, és biztosítsd, hogy külön-külön
          növeljék a számlálók értékét! Mindegyik callback egy{" "}
          <strong>integer</strong> számot kell kapjon paraméterül, ami az a
          mennyiség, amennyivel növelni akarjuk a számláló meglévő értékét! Ha
          szükséges használhatsz egyéb paramétereket is! (Tipp: használj{" "}
          <code>this.forceupdate()</code>-ot!)
        </li>
        <li>
          Helyezd át a globális <code>data</code> tömböt a komponens{" "}
          <strong>statejébe</strong> az <code>App</code> komponensben!
        </li>
        <li>
          Renderelj egy negyedik <code>Counter</code> komponenst, és biztosítsd,
          hogy az értéke külön változik a többitől!
        </li>
        <li>
          Készíts egy <code>Total</code> komponenst, ami rendereli az összest
          Counter komponenst, és még egy mezőt, ami kiírja az összes{" "}
          <code>Counter</code> értékének összegét! Tehát ne az <code>App</code>
          ban legyenek a <code>Counter</code>ek, hanem a <code>Total</code>ban.
        </li>
        <li>
          Készíts egy másolatot az eddigi feladatok megoldása utáni{" "}
          <code>Counter</code>ről, hogy később ellenőrizni tudjam! Ezt a fájlt
          nevezd el mondjuk <code>Counter_copy.js</code>-nek! Az eredeti{" "}
          <code>Counter</code>re pedig oldd meg a következő feladatokat:
          <ol>
            <li>
              töröld ki az <code>onIncrement</code> és <code>onDecrement</code>{" "}
              propokat
            </li>
            <li>
              adj meg a kettő eddigi helyett egyetlen <code>onChange</code>{" "}
              <strong>callback propot</strong>
            </li>
            <li>
              biztosítsd, hogy így is az összes <code>Counter</code> ugyanúgy
              működik, mint ezelőtt
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}
