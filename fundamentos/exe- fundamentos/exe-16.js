/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores*/

const calculadora = (n1, operação, n2) => {
  switch (operação) {
    case "+":
      return n1 + n2
    case "-":
      return n1 - n2
    case "*":
      return n1 * n2
    case "/":
      return n1 / n2
    default:
      return "Operação invalida"
  }
}
console.log(calculadora(10, "+", 2))
console.log(calculadora(10, "-", 2))
console.log(calculadora(10, "*", 2))
console.log(calculadora(10, "/", 2))
console.log(calculadora(10, "%", 2))