let obj = {
  name: 'Balazs',
  age: 100,
  greet: function() {
    console.log('Hello World')
  }
}

let {name, age, greet: hello} = obj

console.log(name, age)
hello()

// itt nem skippelhetunk ugy mint az elobb, de szimplan kihagyhatjuk ami nem kell, mert az adatszerkezetunk nem rendezett hanem kulcs-ertek parokbol all
