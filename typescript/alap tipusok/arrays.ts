const persona = {
  name: "Balazs",
  height: 184,
  hobbies: ["semmi", "semmi2"],
};

let favouriteActivitites: number[] = [1, 2, 3, 4];
// favouriteActivitites.push("a");

console.log(favouriteActivitites);

// favouriteActivitites = ["Sport"];
// console.log(persona.hobbies);

persona.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});

for (const hobby of persona.hobbies) {
  console.log(hobby.toUpperCase());
}
