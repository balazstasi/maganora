// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// redux
// const CREATE_USER = "CREATE_USER";
// dispatch(CREATE_USER)
var API;
(function (API) {
  API["CREATE_USER"] = "https://firebase/asdajshgdajshgdasd/create";
  API[(API["READ_ONLY"] = 100)] = "READ_ONLY";
  API["AUTHOR"] = "AUTHOR";
})(API || (API = {}));
var personnnn = {
  name: "Balazs",
  age: 100,
  hobbies: ["semmi"],
  role: API.CREATE_USER,
};
console.log(typeof personnnn.role);
