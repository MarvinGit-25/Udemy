/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-
se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.
💡
A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
Exemplos:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3*/



//Resolução 1
function calcularMedia(numeros) {
  const quantidadeDeNumeros = numeros.length
  let somaTotal = 0
  for (numero of numeros) {
    somaTotal += numero
  }
  return somaTotal / quantidadeDeNumeros
}
console.log(calcularMedia([10, 9, 8]))

//Resolução 2
function calcularMedia(numeros) {
  const quantidadeDeNumeros = numeros.length
  const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)
  return somaTotal / quantidadeDeNumeros
}
console.log(calcularMedia([10, 10, 10]))
