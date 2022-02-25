const soma = function (x, y) {
  return x + y
}

const imprimirresultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}
console.log("============")
imprimirresultado(3, 4)
imprimirresultado(3, 4, soma)
imprimirresultado(3, 4, function (x, y) {
  return x - y
})
imprimirresultado(3, 4, (x, y) => (x * y))
console.log("============")

const pessoa = {
  falar: function () { // falar(){} essa sixtaxe tbm é valida!! 
    console.log("opa")
  }
}
pessoa.falar()

