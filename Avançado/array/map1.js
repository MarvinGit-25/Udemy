// O método map() invoca a função callback passada por argumento para cada elemento
// do Array e devolve um novo Array com os dados transformados.
const nuns = [1, 2, 3, 4, 5, 6]
let resultado = nuns.map(function (e) {
  return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const imprimirResultado = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nuns.map(soma10).map(triplo).map(imprimirResultado)
console.log(resultado)