// O método map() invoca a função callback passada por argumento para cada elemento
// do Array e devolve um novo Array com os dados transformados.
const carrinho = [
  // formato jason
  '{"nome": "borracha", "preço": 3.45}',
  '{"nome": "caderno", "preço": 13.90}',
  '{"nome": "kit de lapis", "preço": 42.22}',
  '{"nome": "caneta", "preço": 7.50}'
]

const paraObj = json => JSON.parse(json)
const preco = produto => produto.preço

const resultado = carrinho.map(paraObj).map(preco)
console.log(resultado)