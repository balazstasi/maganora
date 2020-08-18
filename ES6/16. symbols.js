let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')

console.log(typeof sym1)
console.log(sym2 === sym3)

let obj = {
  name: 'Balazs',
  [sym2]: 22
}

// stringet csinal az objektumbol, ami kesobb visszafejtheto a JSON.parse() metodussal
JSON.stringify(obj)

// A szimbolumok metaprogramozasi szempontbol hasznosak, mint a fenti peldaban pl, ha hozza akarok rendelni egy meta adattagot, amit csak explicit akarok elerni, de pl egy foros atjaras soran nem akarom hogy visszaadodjon, akkor ezeket erdemes hasznalni
let numbers = [1,2,3]

numbers[Symbol.toPrimitive] = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return numbers.reduce(reducer)
}

console.log(numbers + 15)
