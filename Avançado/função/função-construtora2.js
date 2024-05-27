// objeto
const ObjPessoa = {
  nome: "Vinicius",
  idade: 25,
  falar(palavra) {
    console.log(`${this.nome} diz ${palavra}`)
  },
  envelhecer(anos) {
    this.idade += anos || 1
    console.log(this.idade)
  }

}

ObjPessoa.falar("futuro desenvolvedor web")
ObjPessoa.envelhecer()

console.log("::::::::::::::::::")
// função construtora
function pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade || 1

  this.falar = (palavra) => {
    console.log(`${this.nome} diz ${palavra}`)
  }
  this.envelhecer = (anos) => {
    this.idade += anos || 1
    console.log(this.idade)
  }
}


const Vinicius = new pessoa("Vinicius", 25)
console.log(Vinicius)
Vinicius.falar("Futuro Desenvolvedor Web")

const Janaina = new pessoa("Janaina", 23)
Janaina.envelhecer(12)


