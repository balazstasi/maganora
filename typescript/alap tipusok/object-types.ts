const person: {
  name: string;
  age: number;
} = {
  name: "Balazs",
  // age: "tiz", ilyenkor szol a ts hogy hiba van
  age: 15,
};

console.log(person.name);
