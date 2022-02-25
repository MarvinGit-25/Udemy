/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"*/


//Resolução 1
function simboloMais(quantidade) {
  let resultado = ''
  for (let i = 0; i < quantidade; i++)
    resultado += '+'
  return resultado
}
console.log(simboloMais(2))

//Resolução 2
function simboloMais(quantidade) {
  return Array(quantidade).fill('+').join('') /* fill() preenche todos os valores
                                              do array a partir doíndice inicial a um índice final com um valor estático.
                                              join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.*/
}
console.log(simboloMais(3))

//Resolução 3
function simboloMais(quantidade) {
  return "+".repeat(quantidade) /* repeat() constrói e retorna uma nova string com 
                                 um determinado número de cópias concatenadas da string original.*/
}
console.log(simboloMais(4))