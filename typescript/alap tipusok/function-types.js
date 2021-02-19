// arra utal hogy milyen tipust kell visszaadnia a fg-nek
// ebben az esetben szamot, ha stringet adnenk pl vissza, errort dobna
function add(a, b) {
    return a + b;
}
function addAndHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
