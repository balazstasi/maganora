const person_tuples: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string, string];
} = {
  name: "Balaz",
  age: 30,
  hobbies: ["semmi1", "semmi2"],
  role: [1, "auhor", "publisher"],
};

// person_tuples.role.push("admin"); ez meg van engedve, de nem a typescripthez illik
// person_tuples.role[1] = 10;
console.log(person_tuples.role);
