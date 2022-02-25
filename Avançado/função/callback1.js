const fabricantes = ["mercedes", "audi", "bmw"]


function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir) // forEach função de array, callbaack.
console.log("------------------------------------")

fabricantes.forEach(fabricante => console.log(fabricante)) // callback.

