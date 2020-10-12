/*
  Ez egy absztrakt class lesz! (nem egy React komponens)
  El fogja tárolni az összes paramétert amit majd átadunk neki, úgy, hogy azok a class tulajdonságai lesznek
  Ezt azért fogjuk használni, hogy szimplábbá tegyük a gyerek classokat, mert azok öröklődni fognak
  Egy absztrakt Rules (Szabály) classból

  Ezen felül ez a fájl tartalmazni fog hasznos függvényeket, amivel:
    1. Összeadhatjuk a dobókockák értékét
    2. Megszámolhatjuk, hány ugyanolyan van
    3. Megszámolhatjuk, hogy hány féléből hány van
    ...és hasonlók...
*/

class Rules {
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

/*
  Megadunk egy val-t (1,2,3,4,5 v 6) és 
  visszatérünk a dobókockák összegével a megadott szám függvényében
*/
class TotalOneNumber extends Rules {
  evalRoll = (dice) => {
    return this.val * this.count(dice, this.val);
  };
}

class SumDistro extends Rules {
  evalRoll = (dice) => {
    // leellenőrizzük, hogy a paraméterül kapott count változó (egy szám)
    // értékével egyenlő vagy annál nagyobb számosságú elem van a dobókockák között
    return this.freq(dice).some((c) => c >= this.count) ? this.sum(dice) : 0;
  };
}

// csekkoljuk hogy van-e valamiből 3 és másból pedig 2
class FullHouse extends Rules {
  // TODO
}

class SmallStraight extends Rules {
  // TODO
}

class LargeStraight extends Rules {
  evalRoll = (dice) => {
    // tegyük fel, hogy a kapott dobókockák: [1, 1, 2, 6, 6]
    // akkor a létrejött Set: {1, 2, 6}
    // mivel a halmazban minden elem különböző
    const d = new Set(dice);

    // largeStraight az 5 különböző szám, de csak egyszer lehet 6-os v 1-es
    // vagy másképpen az 1 2 3 4 5 összes sorrendje (permutációja)
    // azért nézzük meg, hogy a size 5-e, mert akkor minden elem különbözik, mert a fg elején
    // tömbből halmazt csinálunk, így a többször jelenlévő elemek helyett 1 elem lesz a halmazban
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}

class Yahtzee extends Rules {
  evalRoll = (dice) => {
    // minden kocka ugyanaz kell legyen
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

const ones = new TotalOneNumber({ val: 1 });
const twos = new TotalOneNumber({ val: 2 });
const threes = new TotalOneNumber({ val: 3 });
const fours = new TotalOneNumber({ val: 4 });
const fives = new TotalOneNumber({ val: 5 });
const sixes = new TotalOneNumber({ val: 6 });

const threeOfKind = new SumDistro({ count: 3 });
const fourOfKind = new SumDistro({ count: 4 });
const fullHouse = "TODO";
const smallStraight = "TODO";
const largeStraight = new LargeStraight({ score: 40 });
const yahtzee = new Yahtzee({ score: 50 });
const chance = new SumDistro({ count: 0 });

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
};
