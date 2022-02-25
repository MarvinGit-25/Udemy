let dobro = function (a) {
  return 2 * a
}

dobro = (a) => { // Arrow function.
  return 2 * a
}


dobro = a => 2 * a // return implicito.
console.log(dobro(Math.PI))
console.log("--------------")

let ola = function () {
  return 'ola'
}

ola = () => "ola"
ola = _ => "ola" // possui params!!
console.log(ola())



