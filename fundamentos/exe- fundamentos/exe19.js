/* ​ O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const cardapio = (codigo, QtdProduto) => {
  switch (codigo) {
    case 100:
      return QtdProduto * 3
    case 200:
      return QtdProduto * 4
    case 300:
      return QtdProduto * 5.5
    case 400:
      return QtdProduto * 7.5
    case 500:
      return QtdProduto * 3.5
    case 600:
      return QtdProduto * 2.8
    default:
      return "produtos inexistente"
  }
}
console.log(cardapio(100, 5))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 1))
console.log(cardapio(500, 3))
console.log(cardapio(600, 6))
console.log(cardapio(700, 5))