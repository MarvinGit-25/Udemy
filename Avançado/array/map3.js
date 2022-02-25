// implementando o map.
// criando uma função no prototype de Array
Array.prototype.map2 = function (callback) {
  newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  // formato jason
  '{"nome": "borracha", "preço": 3.45}',
  '{"nome": "caderno", "preço": 13.90}',
  '{"nome": "kit de lapis", "preço": 42.22}',
  '{"nome": "caneta", "preço": 7.50}'
]

const paraObj = json => JSON.parse(json)
const preco = produto => produto.preço

const resultado = carrinho.map2(paraObj).map2(preco)
console.log(resultado)