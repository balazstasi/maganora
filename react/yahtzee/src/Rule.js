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
    /*
      let dobokockak = [1, 1, 5, 6, 6];
      let szamossag = Array(7).fill(0); // [0, 0, 0, 0, 0, 0, 0]
      1. szamossag[1] = 1
      2. szamossag[1] = 2
      3. szamossag[5] = 1
      4. szamossag[6] = 1
      5. szamossag[6] = 2
      eredmeny: szamossag === [0, 2, 0, 0, 0, 1, 2]
      for (let i = 0; i < dobokockak.length; i++) {
        szamossag[dobokockak[i]]++;
      }
    */

    /* 
      A dice elemeinek számossága
      dice = [1, 1, 5, 6, 6]
      freqs = Map{}
      1. freqs.set(1, 0+1), freqs = Map{'1': 1}
      2. freqs.set(1, 1+1), freqs = Map{'1': 2}
      3. freqs.set(5, 0+1), freqs = Map{'5': 1}
      3. freqs.set(6, 0+1), freqs = Map{'6': 1}
      3. freqs.set(6, 1+1), freqs = Map{'6': 2}
    */
    const freqs = new Map();
    for (let die of dice) freqs.set(die, (freqs.get(die) || 0) + 1);

    return Array.from(freqs.values());
  }
}

class Yahtzee extends Rule {
  evalRoll = (dice) => {
    // minden kocka ugyanaz kell legyen
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}
const yahtzee = new Yahtzee({ score: 50 });

class FullHouse {
  // TODO
}

export { yahtzee };
