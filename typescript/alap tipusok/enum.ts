// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// redux
// const CREATE_USER = "CREATE_USER";
// dispatch(CREATE_USER)

enum API {
  CREATE_USER = "https://firebase/asdajshgdajshgdasd/create",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const personnnn = {
  name: "Balazs",
  age: 100,
  hobbies: ["semmi"],
  role: API.CREATE_USER,
};

console.log(typeof personnnn.role);
