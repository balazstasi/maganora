/*
  Ez egy absztrakt class lesz! (nem egy React komponens)
  El fogja tárolni az összes paramétert amit majd átadunk neki, úgy, hogy azok a class tulajdonságai lesznek
  Ezt azért fogjuk használni, hogy szimplábbá tegyük a gyerek classokat, mert azok öröklődni fognak
  Egy absztrakt Rule (Szabály) classból

  Ezen felül ez a fájl tartalmazni fog hasznos függvényeket, amivel:
    1. Összeadhatjuk a dobókockák értékét
    2. Megszámolhatjuk, hány ugyanolyan van
    3. Megszámolhatjuk, hogy hány féléből hány van
    ...és hasonlók...
*/

class Rule {
  constructor(params) {
    // minden paramétert el fogunk menteni
    Object.assign(this, params);
  }

  sum(dice) {
    // ez fogja összeadni a dobókockákat
    return dice.reduce((prev, curr) => prev + curr);
  }

  count(dice, val) {
    // hányszor szerepel val a dice-ban
    // pl dice=[1,2,2,3,4] val=2
    // return [1,2,2,3,4].filter = [2,2]
    return dice.filter((d) => d === val).length;
  }

  freq(dice) {
    // A dice elemeinek számossága
    const freqs = new Map()
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1)
  }
}
