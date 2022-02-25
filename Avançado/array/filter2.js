// implementando o filter.
// criando uma função no prototype de Array
Array.prototype.filter2 = function (callback) {
  const newArray = [] // array vazio
  for (let i = 0; i < this.length; i++) { // percorrendo o array externo
    if (callback(this[i], i, this)) { // teste condicional com if
      newArray.push(this[i]) // puxando para o array vazio
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preço: 2499, fragil: true },
  { nome: 'ipad pro', preço: 4199, fragil: true },
  { nome: 'copo de vidro', preço: 12.49, fragil: true },
  { nome: 'copo de plastico', preço: 18.99, fragil: true },
]

const caro = produto => produto.preço >= 500

const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))