/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []*/

// minha resposta
function filtrarNumeros(array) {
  const resultado = []
  for (let item of array) { /* for...of percorre objetos iterativos (incluindo Array, Map, Set, 
                            o objeto arguments e assim por diante),chamando uma função personalizada com instruções a 
                             serem executadas para o valor de cada objeto distinto.*/
    if (typeof item === "number") {
      resultado.push(item)
    }
  }

  return resultado
}
console.log(filtrarNumeros(["Java", 12, 3]))


// resoluçao 1
function filtrarNumeros(array) {
  const resultado = []
  for (let item of array)
    if (typeof item === "number")
      resultado.push(item)
  return resultado
}
console.log(filtrarNumeros([12, 45, 56, 78]))


//Resolução 2

function filtrarNumeros(array) {
  return array.filter(item => typeof item === "number")  /* filter() cria um novo array com todos os elementos
                                                         que passaram no teste implementado pela função fornecida.*/
}
console.log(filtrarNumeros([12, "javascript"]))
