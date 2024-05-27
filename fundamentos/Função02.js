// Armazenando uma função em uma variavel.
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
console.log("------------")

// Armazenando uma função arrow em uma variavel.
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))
console.log("------------")

// retorno implicito
const subtração = (a, b) => a - b // forma reduzida!!
console.log(subtração(2, 3))
console.log("------------")

const imprimir2 = a => console.log(a) // forma reduzida com um parametro.
imprimir2("legal!!!")


console.log("--------------Teste-------------")
function IMC(peso = 60, altura = 1.65) {
    var imc = peso / altura ^ 2
    return imc
}
console.log("seu imc é",IMC())



