console.log(typeof String) //função Prototype
console.log(typeof Array) //função Prototype
console.log(typeof Object) //função e tbm tem Prototype

String.prototype.reverse = function () { // criando uma função no prototype da string
  return this.split('').reverse().join('')
}
console.log('escola coder'.reverse()) // chamando a função prototype da String 

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4.5].first())
console.log(["a", "b", "c"].first())

String.prototype.toString = function () {
  return "lascou tudo"
}

console.log('Escola code3'.reverse())


