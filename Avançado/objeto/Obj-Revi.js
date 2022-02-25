// coleção dinâmica de pares chaves/valores.
const produto = new Object // função construtora do javascript
produto.nome = "cadeira"
produto["Marca do produto"] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["Marca do produto"]
console.log(produto)

console.log("--------------------")

const carro = {
  modelo: "a4",
  valor: 89000,
  proprietário: {
    nome: "raul",
    idade: 56,
    endereco: {
      logradouro: "abc",
      numero: 123


    }
  },
  condutores: [{
    nome: "junio",
    idade: 42
  },
  {
    nome: "Ana",
    idade: 42
  }],
  calcularvalordosseguro: function () {
    // . . .
  }
}
console.log(carro)
carro.proprietário.endereco.numero = 321 // acessa os atributos de um objeto.
carro['proprietário']['endereco']['logradouro'] = "Av: Brasil" // acessa os atributos de um objeto.
console.log(carro)

delete carro.condutores // deleta o objeto condutores de dentro do objeto principal.
delete carro.proprietário.endereco // deleta o objeto condutores de dentro do objeto principal.
delete carro.calcularvalordosseguro // deleta o objeto condutores de dentro do objeto principal.
console.log(carro)

