// função pode ter retorno ou não!!

// sem retorno
function divisão(a, b) {
  console.log(a / b)
}
divisão(10, 2)
divisão(10, 2, 34, 56) // ingnora os outros valores

console.log("++++++++++++")

// com retorno
function divisão1(a, b) {
  return a / b
}
console.log(divisão1(10, 2))
console.log(divisão1(10)) // NaN

console.log("++++++++++++")

function divisão2(a, b = 20) { // b recebe valor padrão 20
  return a / b
}
console.log(divisão2(100))

console.log("++++++++++++")

// funcões podem receber funções como parametro
const cnh = (idade) => {
  return idade >= 18 ? "apto a dirigir" : "nao esta apto a dirigir" // operador ternario
}

const imprimir = (detran = cnh) => {
  console.log(detran(17))
  return detran
}
imprimir()

console.log("+++++")
// outro exemplo

const soma = function (x, y) {
  return x + y
}

const imprimirresultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}


imprimirresultado(3, 4)
imprimirresultado(3, 4, soma) // posso chamar explicitamente
imprimirresultado(3, 4, function (x, y) { // passando a função diretamente na chamada da função imprimirresultado
  return x - y
})
imprimirresultado(3, 4, (x, y) => (x * y)) // arrow function

