function pessoa(nome) {
  this.nome = nome
  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new pessoa('joão')
p1.falar()
console.log("----------------")

class pessoa1 {
  constructor(nome) {
    this.nome = nome
  }
  fala() {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p2 = new pessoa1("Maria")
p2.fala()