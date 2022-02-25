let valor // não inicializada.
console.log(valor)

valor = null // ausência de valor.
console.log(valor)
// console.log(valor.toString) => TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preço)
// console.log(produto) => undefined

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // evite atribuir undefined.
console.log(!!produto.preço)
//delete produto.preço => forma correta deletar.
console.log(produto)

produto.preço = null // sem preço
console.log(!!produto.preço)
console.log(produto)