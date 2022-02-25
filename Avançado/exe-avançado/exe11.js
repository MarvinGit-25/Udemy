/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:

Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]*/

// minha resposta
function A_rray(array = [1, 2, 3, 4, 5, 6, 7]) {
  const Prime_elemento = array[0]
  const ulti_elemento = array[6]
  return [Prime_elemento, ulti_elemento]

}
console.log(A_rray())


//Resolução 1

function receberPrimeiroEUltimoElemento(elementos = [1, 2, 3, 4, 5]) {
  const indiceDoPrimeiroElemento = 0
  const indiceDoUltimoElemento = elementos.length - 1
  const primeiroElemento = elementos[indiceDoPrimeiroElemento]
  const ultimoElemento = elementos[indiceDoUltimoElemento]
  return [primeiroElemento, ultimoElemento].fill(elementos[0, 6])
}
console.log(receberPrimeiroEUltimoElemento())


//Resolução 2
function receberPrimeiroEUltimoElemento(elementos) {
  const primeiroElemento = elementos.shift()
  const ultimoElemento = elementos.pop()
  return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento())


// resolução
function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop()
  return [primeiroElemento, ultimoElemento]
}
console.log(receberPrimeiroEUltimoElemento())

