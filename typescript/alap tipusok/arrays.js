var persona = {
    name: "Balazs",
    height: 184,
    hobbies: ["semmi", "semmi2"]
};
var favouriteActivitites = [1, 2, 3, 4];
// favouriteActivitites.push("a");
console.log(favouriteActivitites);
// favouriteActivitites = ["Sport"];
// console.log(persona.hobbies);
persona.hobbies.forEach(function (hobby) {
    console.log(hobby.toUpperCase());
});
for (var _i = 0, _a = persona.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
