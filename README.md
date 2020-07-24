# Webfejlesztés magánóra
##  Hasznos linkek

Ezek a linkek az ELTE webfejlesztés és webprogrmaozás tárgyainak curriculumát tartalmazzák.

[HTML+CSS](https://regi.tankonyvtar.hu/hu/tartalom/tamop412A/2011-0052_27_weblapkeszites_technikaja_ergonomiaja/index.scorml)

JS & PHP  
[1](http://webprogramozas.inf.elte.hu/webprog/ea/01/#/) [2](http://webprogramozas.inf.elte.hu/webprog/ea/02/#/) [3](http://webprogramozas.inf.elte.hu/webprog/ea/03/#/) [4](http://webprogramozas.inf.elte.hu/webprog/ea/04/#/) [5](http://webprogramozas.inf.elte.hu/webprog/ea/05/#/) [6](http://webprogramozas.inf.elte.hu/webprog/ea/06/#/) [7](http://webprogramozas.inf.elte.hu/webprog/ea/07/#/)  [8](http://webprogramozas.inf.elte.hu/webprog/ea/08/#/) [9](http://webprogramozas.inf.elte.hu/webprog/ea/09/#/) [10](http://webprogramozas.inf.elte.hu/webprog/ea/10/#/) [11](http://webprogramozas.inf.elte.hu/webprog/ea/11/#/) [12](http://webprogramozas.inf.elte.hu/webprog/ea/12/#/) [13](http://webprogramozas.inf.elte.hu/webprog/ea/13/#/)

## Progresszív landing page
Az óra anyaga a [progressive](progressive) mappában elérhető. Egy alap bootstrap landing page különböző funkciói vannak implementálva. A feladatleírást  [itt](progressive/feladatok.md) találod.
## React és egyebek
### Alapok
Ahhoz, hogy kicsit bonyolultabb alkalmazásokat készítsünk elég lenne a javascript magában, de ez elég nagy programoknál könnyen kezelhetetlenné válhat. Itt jönnek képbe a különböző libraryk és keretrendszerek. A 3 legnagyobb ilyen frontend library/framework a React, az Angular és a VueJS. A továbbiakban a Reactról lesz szó, mivel ez talán a legelterjedtebb a legtöbb számítást nézve.

Ahhoz, hogy bármilyen keretrendszert vagy könytvárat használni tudjunk, be kell őket importálni valamilyen módon a weboldalunkba. Itt segítségül jöhetnek az úgy nevezett CDN-ek (Content Delivery Network), ahol egy könnyű script tagben az ```src``` kulcsszónak értéket adva már használhatjuk is a projektünkben az adott könytvárat. Példa pl a React CDN [link](https://reactjs.org/docs/cdn-links.html)je

Azonban ez nagyobb projektekben nem célravezető, mivel rengeteg libraryt kell használnunk, amik referálnak egymásra, így hamar összekeverhetjük a sorrendet, meg amúgy is kicsit "béna" megoldás ez.
### NPM
Itt jön képbe a [Node](https://nodejs.dev/) és a Node Package Manager, azaz az npm. Ezt ha feltelepítjük, elég a már létező, vagy teljesen új projekt mappánkba, ahol van már egy html oldal pl megnyitnunk egy terminal (Windowson cmd.exe vagy powershell.exe) ablakot, beütjük, hogy ``npm init``, követjük az utasításokat, és máris generálódott egy package.json fájl. Itt tárolódnak különböző adatok a projektünkről.

A fontos azonban, hogy innen kezdve már használhatjuk az [NPM](https://medium.com/swlh/npm-in-less-than-10-minutes-6b321d566271)-et. Az ``npm install``  parancsnak argumentumként megadjuk a kívánt package nevet, és már települ is. 

### React
A mi esetünkben a React-ra van szükség. Feltelepítjük tehát a következő paranccsal ``npm install react react-dom``.  Így máris a projektünkbe hozzá lett adva a React, amit megnézhetünk a package.json dependencies adattagjában. Megfigyelhetünk még egy **node_modules** mappát is, ami az összes függőséget tartalmazza, amire szüksége van a projektünknek. A Reactról a továbbiakban az órán elhangzott dolgokról az anyag a [react](react) mappán belül lesz.

### Babel
A react azonban használ olyan JavaScript szintaxisokat és metódusokat, amiket a böngészők nem támogatnak még. Ez azért van mert a JS egy külön nyelv, ami a böngészőktől kvázi függetlenül fejlődik, és ezt érik be folyamatosan az ált. Chrome és Firefox alapú böngészők. Hogy ezeket az új funkciókat, és a React speciális [JSX](https://reactjs.org/docs/introducing-jsx.html) szintaxisát használni tudjuk szükségünk van a [Babel](https://babeljs.io/)-re. A BabelJS az új JS szintaxisát képes a böngészők által érthető régebbi JS szintaxissá átalakítani.

### Bundlerek és Parcel
A bundlerek egyszerűen fogalmazva arra jók, hogy a projektünk sok kicsi .js fájljából, és egyéb fájlokból egy óriási nagy .js fájlt fog készíteni, amit a böngésző könnyen tud kezelni.
Ahhoz hogy a Babelt könnyen tudjuk használni, és a többi kódunkat is kellemesen tudjuk írni, használva az import és export kulcsszavakat (amiket a böngészők szintén nem ismernek), szükségünk van ún. bundlerekre. A leghíresebb ezek közül a Webpack és a Browserify, de ezeket kicsit nehéz bekonfigurálni. Így az órákon az egyszerűség kedvéért [Parcel](https://parceljs.org/) nevű bundler bekonfigurálását fogom megmutatni.

...

**FOLYT KÖV**