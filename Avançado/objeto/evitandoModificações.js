//Object.preventExtensions cria objetos que não podem ser extendidos
const produto = Object.preventExtensions({
  nome: "qualquer",
  preço: 1.99,
  tag: 'promoçao'
})
console.log('extensivel', Object.isExtensible(produto)) // verifica se foi criado com preventExtensions

produto.nome = "Borracha" // alterou
produto.descrição = "borracha escolar branca" // não add ao obj!
delete produto.tag // deletou!
console.log(produto)

// object.seal
const pessoa = {
  nome: "Juliana",
  idade: 35
}
Object.seal(pessoa) // sela o objeto não pode ser excluido nem add novos elementos
console.log('selado:', Object.isSealed(pessoa)) // Object.isSealed verifica se o objeto esta selado ou não

pessoa.sobrenome = "Silva" // não add ao obj!
delete pessoa.nome // não deletou do obj!
pessoa.idade = 29 // alterou!
console.log(pessoa)

// Object.freeze = selado + valores contates

const obj = {
  nome: "Marcos",
  idade: 26
}
Object.freeze(obj)
obj.idade = 23 // não alterou!
console.log(obj.idade)
delete obj.nome // não deletou!
console.log(obj.nome)
obj.pesso = 62 // não add!
console.log(obj.pesso)


