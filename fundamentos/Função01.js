// função é um bloco de codigo nomeado!!
// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // ingnora os outros números.
imprimirSoma() //NaN


// Função com retorno
function soma(a, b = 10) { // b recebe um valor padrão = 10.
    return (a + b)
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) //NaN