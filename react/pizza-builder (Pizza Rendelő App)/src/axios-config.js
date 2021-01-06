import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://pizza-builder-5d858-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
