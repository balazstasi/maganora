let numbers = [1,2,3]

// let a = numbers[0]
// let b = numbers[1]
// let c = numbers[2]

let [a, b] = numbers
let [...c] = numbers
let [x, ...y] = numbers
let [q = 12, r, s = 'default', t = 'default'] = numbers

console.log(a)
console.log(b)
console.log(c)
console.log(x)
console.log(y)
console.log(q)
console.log(r)
console.log(s) 
console.log(t)

// ki is cserelhetunk ket valtozoerteket

let elso = 5
let masodik = 10
[masodik, elso] = [elso, masodik];
console.log("csere:")
console.log(masodik)
console.log(elso)

// ki is hagyhatunk valtozokat
let numbers = [1,2,3,4]

let [a, ,b,c] = numbers

console.log(a,b,c)
