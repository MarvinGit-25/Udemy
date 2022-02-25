// tipos de declarações de  funções
// function declaration
function soma(a, b) {
  return a + b
}
console.log(soma(2, 3))

console.log("---------------")

// function expression
const soma1 = function (a, b) {
  return a + b
}
console.log(soma1(4, 5))

console.log("---------------")

// named function expression
const soma3 = function soma3(a, b) {
  return a + b
}
console.log(soma3(5, 6))

console.log("---------------")

//arrow function
const soma4 = (a, b) => {
  return a + b
}
console.log(soma4(4, 3))

console.log("---------------")

// arrow function retorno implicito
const soma5 = (a, b) => a + b
console.log(soma5(5, 5))

console.log("---------------")

// arrow function retorno implicito forma reduzida
const soma6 = n => n + 2
console.log(soma6(6))