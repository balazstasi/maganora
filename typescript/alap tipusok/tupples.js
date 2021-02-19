var person_tuples = {
    name: "Balaz",
    age: 30,
    hobbies: ["semmi1", "semmi2"],
    role: [1, "auhor", "publisher"]
};
person_tuples.role.push("admin");
person_tuples.role[1] = 10;
console.log(person_tuples.role);
