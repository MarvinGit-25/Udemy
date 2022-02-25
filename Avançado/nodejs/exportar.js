console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // não causou nenhuma alteração
console.log(module.exports)

exports = { // não causou nenhuma alteração
  nome: "teste"

}

console.log(module.exports)
module.exports = { publico: true } // causou alteração
console.log(module.exports)


