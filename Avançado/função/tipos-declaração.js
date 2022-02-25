// function declaration.
console.log(soma(3, 4)) // nesse exemplo eu posso chamara função antes.
function soma(x, y) {
  return x + y
}

//function expression.
const sub = function (x, y) {  // armazenando uma função anônima em uma constante. 
  return x - y
}
console.log(sub(3, 4))

//named function expression.
const mult = function mult(x, y) { // armazenando uma função nomeada em uma constante.
  return x * y
}
console.log(mult(3, 4))