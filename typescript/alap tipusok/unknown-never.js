var userInput;
var username;
userInput = 5;
username = "Balazs";
if (typeof userInput === "string") {
    username = userInput;
}
console.log(username);
function generateError(message, code) {
    throw { message: message, code: code };
    while (true) {
        console.log(1);
    }
}
generateError("Not Found", 404);
