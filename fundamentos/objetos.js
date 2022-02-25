
const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaço.

console.log(prod1)
console.log("-----------------------")


const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)

console.log("<<<teste>>>")

const Mercado = {
    produto: {
        produto: "Arroz",
        produto: "Feijão",
        produto: "Farinha"

    }
}
console.log(Mercado)
