# Feladatok

## Landing page
1.  **Landing page – belső linkek**  A landing page oldalon a navigációs fejlécben lévő belső linkekre kattintva az oldal gördülve menjen az adott helyre.
    
2.  **Landing page – navigáció rögzítése**  Ha elgördült az oldal 200px-nyit, akkor alkalmazzuk a  `navbar-scrolled`  stílusosztályt a  `nav`  elemen. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!
    
3.  **Landing page – animáció megjelenéskor**  Ha egy elem gördítés közben a viewportba ér, akkor valamilyen animáció segítségével jelenjen meg! Az elemeket deklaratívan jelöljük meg HTML5 data attribútumokat használva, pl.  `data-scroll`. Az animáció nevét is eltárolhatod data attribútumban, pl.  `data-scroll-animation="fadeInUp"`. Animációhoz használhatod az  `animate.css`  könyvtárat. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!
    
4.  **Landing page – folyamatsáv**  Helyezz el egy olvasási folyamatsávot az oldal tetején. A gördítés mértéke szerint változzon 0 és 100% között a szélessége!
    
5.  **Landing page – aktív menüpont jelzése**  Az oldal gördítése közben jelezd a navigációs sorban, hogy melyik menüpontnál tartunk éppen. Az adott menüpont linkjének stílusosztályai közé adjuk az  `active`  stílusosztályt.
    
6.  **Landing page – számláló pörgetése**  Tedd lehetővé, hogy egy számot tartalmazó elem 0-tól felpörögjön az aktuális értékére! Az elemet deklaratívan paraméterezzük fel data attribútumokon keresztül! Eleinte az elemre kattintva történjen meg a számlálás, később a viewportba érve induljon el!
    
7.  **Landing page – képnagyítás**  Tedd lehetővé, hogy egy olyan elem fölé víve az egeret, amely háttérképet tartalmaz, a kép nagyobban jelenjen meg ugyanakkora helyen, és az egeret mozgatva az elem fölött lehessen a kép minden részletét megtekinteni.

## jQuery

Az alábbi feladatokat a  `recipe_list.html`  oldalon oldd meg!

1.  **Kiválasztás**  Írd ki a konzolra! (kiválasztás szelektorokkal vagy jQuery metódussal)
      1.  a listaelemeket (`li`)
        
        2.  a  `navbar-brand`  stílusosztályú elemet
        
        3.  a  `row`  stílusosztályú elemeket
        
        4.  az összes  `col-*`  stílusosztályú elemet
        
        5.  a  `list-group`  stílusosztályú listán belüli  `list-group-item`  stílusosztályú elemek közül az elsőket
        
        6.  az összes ételre mutató linket
2.  **Bejárás**
      1.  Válassz ki egy kategóriát, és utána írd ki a konzolra az összes benne lévő  `list-group-item`  stílusosztályú elemet!
        
        2.  Válassz ki egy ételhez tartozó linket az oldalon, és add meg a kategóriája nevét!
        
        3.  Konzolra írd ki, mindegyik kategóriára, hogy hány étel tartalmaz!
3.  **Manipulálás**
      1.  Írd ki a kategóriák mellé zárójelben, hogy hány étel jelenik meg alattuk!
        
        2.  A túl rövid nevű (<5) recepteket keretezd be pirosan!
        
        3.  A kategórianevekre kattintva csukódjon össze a kategória! Újra rákattintva jelenjen meg!
4.  **Létrehozás**
       1.  Készíts egy felsorolás az oldalon a kategórianevekkel!
        
        2.  Mindegyik kategóriafejlécbe generálj egy gombot, amire kattintva az adott kategória kitölti a teljes sort (12 egység széles lesz)!
        
        3.  Legyen az oldalon egy gomb, aminek hatására a kategória dobozok eltűnnek, helyette egyetlen lista jelenik meg az összes étellel, mögötte zárójelben a kategória nevével!