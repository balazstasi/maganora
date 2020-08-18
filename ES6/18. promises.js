// Resolveolas
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Done!')
  }, 1500)
})

promise.then(function(value) {
  console.log(value)
})

// Rejecteles
let promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Failed!')
  }, 1500)
})

// nem latunk eloszor semmit, mert a .then a sikeres esetben fut le
promise2.then(function(value) {
  console.log(value)
}, function(error) {
  console.log(error)
})

// Promiseok lancolasa
function waitASecond(seconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      seconds++;
      resolve(seconds)
    }, 1000)
  })
}

// meghivjuk a waitASecond-ot, novelunk egyet, aztan a thenbe megkapja az eddig mlefutott fuggvenyt, tehat folytatodik ugyanonnan, igy meg 1 masodpercet varva meg 1-et novel a 'seconds' valtozon, es a masodik .then-ben pedig kiirjuk
// the value is automatically passed on
waitASecond(0)
  .then(waitASecond)
  .then(function(seconds) {
    console.log(seconds)
  })


// Hibak catchelese

function waitASecond2(seconds) {
  return new Promise(function(resolve, reject) {
    if (seconds > 2) {
      reject("Rejected!!")
    } else {
      setTimeout(function() {
        seconds++;
        resolve(seconds)
      }, 1000)
    }
  })
}

waitASecond2(2)
  .then(waitASecond2)
  .then(function(seconds) {
    console.log(seconds)
  })
  .catch(function(error) {
    console.log(error)
  })

// Built-in metodusok

let promise_1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Resolved!')
  }, 1000)
})

let promise_2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Rejected!')
  }, 2000)
})

// Itt kombinaljuk a 2-t, es csak akkor sikeres a futas, ha az osszes Promise a tombben sikeres, maskepp egyik sem lesz sikeres
Promise.all([promise_1, promise_2])
  .then(function(success) {
    console.log(success);
  })
  .catch(function(error) {
    console.log(error)
  });

// A Promise.all-tol elteroen a race nem varja ki mig az osszes eredmenyhez jut, hanem a legelsot megvarja, mig beer, es annak fuggvenyeben adja vissza a tobbit is
// Tehat. Promise.all = mindegyik sikeres kell legyen
// Promise.race = a legelso/leggyorsabbtol fugg
Promise.race([promise_1, promise_2])
  .then(function(success) {
    console.log(success);
  })
  .catch(function(error) {
    console.log(error)
  });

