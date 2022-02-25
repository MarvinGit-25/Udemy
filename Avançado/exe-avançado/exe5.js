/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.

exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true*/

// minha resposta
const maiorQue = function (a, b) {
  if (a >= b) {
    return true
  }
  else {
    return false
  }
}
console.log(maiorQue(1, 23))

// resolução
function maiorOuIgual(primeiro, segundo) {
  if (typeof primeiro != typeof segundo) return false
  return primeiro >= segundo
}
console.log(maiorOuIgual(100, 34))