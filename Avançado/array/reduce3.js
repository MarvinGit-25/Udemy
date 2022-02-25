// implementando o reduce
// criando uma função no prototype de Array
Array.prototype.filter2 = function (callback) {
  let acumulador = this[0]
  for (let i = 1; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador
}

const soma = (total, valor) => total + valor

const nuns = [1, 2, 3, 4, 5, 6]

console.log(nuns.reduce(soma)) // reduce funciona com um acumulador

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++")

// implementando o reduce
// criando uma função no prototype de Array 
// usando valor inicial
Array.prototype.filter3 = function (callback, valorInicial) { // valorInicial
  const indiceInicial = valorInicial ? 0 : 1 // se valorInicial estiver setado ? 0 : 1
  let acumulador = valorInicial || this[0]
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador
}

const soma1 = (total, valor) => total + valor

const nuns1 = [1, 2, 3, 4, 5, 6]

console.log(nuns1.reduce(soma1, 21)) // reduce funciona com um acumulador

