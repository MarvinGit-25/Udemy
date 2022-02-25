/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.

Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]*/

function repetição(repetidor, qtdrepetição) {
  let resultado = []
  for (let i = 0; i < qtdrepetição; i++) {
    resultado.push(repetidor)
  }
  return resultado
}
console.log(repetição(12, 2))


//Resolução 1
function repetir(item, quantidade) {
  let resultado = []
  for (let i = 0; i < quantidade; i++)
    resultado.push(item)
  return resultado
}
console.log(repetir(12, 2))

// resoluçao 3
function repetir(item, quantidade) {
  return Array(quantidade).fill(item) /* fill() preenche todos os valores do array a 
                                       partir do índice inicial a um índice final com um valor estático.*/
}
console.log(repetir(12, 2))


