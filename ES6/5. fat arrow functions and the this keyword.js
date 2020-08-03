// rakj egy buttont a html-be
var button = document.querySelector('button')
// setTimeout(() => console.log('callback'), 2000)

// itt a this a window objectre referal
function fn() {
  console.log(this)
}

// itt is
var fn2 = () => console.log(this)

// button.addEventListener('click', fn)
button.addEventListener('click', fn2)