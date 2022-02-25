// Faça um algoritmo que calcule o fatorial de um número.
console.log("Fatorial 1")
const fatorial = (numero) => {
  if (numero == 0) return 1
  else return numero * fatorial(numero - 1)
}
console.log(fatorial(6))

console.log("Fatorial 2")
function fatorialRec(numero) {
  var resultado = 1
  for (let i = numero; i > 1; i--) {
    resultado = resultado * i

  }
  return resultado
}
console.log(fatorialRec(6))

console.log("Fatorial 3")
function fatorialRec1(numero) {
  var resultado = numero
  for (let i = 1; i < numero; i++) {
    resultado = resultado * i

  }
  return resultado
}
console.log(fatorialRec1(6))



