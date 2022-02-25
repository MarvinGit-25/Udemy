// Função Factory sempre retorna um objeto.
function criarProduto(nome, preço) {
  return {
    nome,
    preço,
    desconto: 0.1

  }

}
console.log(criarProduto("notebook", 2199.49))
console.log("------------------------------------")

function altopeças(ferramenta, valor) {
  return {
    ferramenta,
    valor
  }
}
console.log(altopeças("chave de fenda", 10.50))






