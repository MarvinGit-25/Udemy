function getpreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: "notebook", 
  preço: 4589,
  desc: 0.15,
  getpreco // associa com a função getpreco!! |^|
}
global.preco = 20
global.desc = 0.1
console.log(getpreco())
console.log(produto.getpreco()) // NaN | this no contexto do global não esta definnido.
console.log("-------------------------------")
console.log("-------------------------------")


const carro = { preco: 4999, desc: 0.20, }

console.log(getpreco.call(carro)) // call execulta a função dentro de contexto x
console.log(getpreco.apply(carro)) // apply execulta a função dentro de contexto x
console.log("---------------------------------")

//Diferença entre o call e o apply | passagen de parametros. 
console.log(getpreco.call(carro, 0.17, "R$")) // call execulta a função dentro de contexto x
console.log(getpreco.apply(carro, [0.16, "R$"])) // apply execulta a função dentro de contexto x
