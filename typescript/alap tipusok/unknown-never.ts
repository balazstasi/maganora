let userInput: unknown;
let username: string;

userInput = 5;
username = "Balazs";

if (typeof userInput === "string") {
  username = userInput;
}

console.log(username);

function generateError(message: string, code: number): never {
  throw { message: message, code: code };

  // nem lepunk be a vegtelen ciklusba, mert hamarabb throwolunk, ami megszakitja
  // az egesz fuggvenyt, a vege elott. Ezt jelezzuk a neverrel.
  while (true) {
    console.log(1);
  }
}

generateError("Not Found", 404);
