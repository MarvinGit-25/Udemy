const produto = [
  { nome: 'Notebook', preço: 2499, fragil: true },
  { nome: 'ipad pro', preço: 4199, fragil: true },
  { nome: 'copo de vidro', preço: 12.49, fragil: true },
  { nome: 'copo de plastico', preço: 18.99, fragil: true },
]
console.log(produto.filter(function (p) {
  return false                            // que passaram no teste implementado pela função fornecida.
}))

const caro = produto => produto.preço >= 500

const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))

