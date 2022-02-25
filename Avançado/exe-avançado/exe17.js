/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:

somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60*/

// minha resposta
function SomaArray(numero) {
  let receberSoma = 0
  numero.filter(numero => receberSoma += numero)  /* filter() cria um novo array com todos os elementos
                                                    que passaram no teste implementado pela função fornecida.*/
  return receberSoma
}
console.log(SomaArray([1, 2, 3, 4, 5, 6, 7]))


// resolução 1
function somarNumeros(numeros) {
  const quantidadeDeNumeros = numeros.length
  return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1)) // gera um novo array aprtir do indice.
}
console.log(somarNumeros([1, 2, 3, 4, 5, 6, 7]))


//Resolução 2
function somarNumeros(numeros) {
  let soma = 0
  numeros.forEach(numero => soma += numero)
  return soma
}
console.log(somarNumeros([1]))

//Resolução 3
function somarNumeros(numeros) {
  const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
  return soma
}
console.log(somarNumeros([1]))