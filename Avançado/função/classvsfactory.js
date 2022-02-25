// Classe.
class pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new pessoa('joão') // instanciando novo objeto
p1.falar()
console.log("-----------------------------------")

// function Factory.
// sempre retorna um objeto.
const criapessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = criapessoa('Maria')
p2.falar()
console.log("-----------------------------------")

// function construtora.
const pessoa3 = function (name) {
  this.name = name
  this.falar = function () {
    console.log(`Meu nome é ${this.name}`)
  }
}
const p3 = new pessoa3('Marcos')
p3.falar()

console.log("---testando---")

// function Factory.
// testando sem arrow function.
const criapessoa2 = function (nome) {
  return {
    falar() {
      console.log(`Meu nome é ${nome}`)
    }
  }
}
const p4 = criapessoa2('Maria')
p4.falar()
console.log("-----------------------------------")

