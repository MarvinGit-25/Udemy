// função com objetos

// função pode receber um obj como parametro
function obj(obj) {
  return obj
}
console.log(obj({ nome: "Marcos Vinicius" }))

console.log("++++++++++")

// um objeto pode receber uma função
// 3 tipos diferentes de definir função dentro de objetos
const obj1 = {
  falar() {
    console.log("falando") // primeiro
  },
  falar1: function () { // segundo
    console.log("falando1")
  }
}

obj1.falar2 = function () { // terceiro
  console.log("falando2")
}


obj1.falar2()
obj1.falar1()
obj1.falar()

console.log("++++++++++")

// uma função pode conter um obj
const obj2 = () => {
  const objeto = {
    nome: "Marcos",
    data_de_nascimento: "01/03/1995"
  }
  return objeto
}

console.log(obj2())

console.log("++++++++++")

// uma função pode retornar um objeto
// função factory1

function obj3() {
  return {
    nome: "Vinicius",
    cpf: "02711393232",
    falar3() { return "testando" }
  }
}

console.log(obj3())

console.log("++++++++++")

// função factory2
function obj4(nome, idade, cpf) {
  return {
    nome,
    idade,
    cpf,
    verifca() {
      return nome.toUpperCase()
    }
  }
}
const resultado1 = obj4("Marcos", 26, "02711393232",)
const resultado2 = obj4("bruno", 23, "02711393232")

console.log(resultado1.verifca())
console.log(resultado2.verifca())

console.log("++++++")



// funções constutoras
function Aluno(nota1, nota2, nota3) {
  this.nota1 = nota1
  this.nota2 = nota2
  this.nota3 = nota3
  this.func = function () {
    const media = (nota1 + nota2 + nota3)
    return media / 3
  }

}
const escola = new Aluno(10, 10, 10)
console.log(escola.func())
console.log()


console.log("++++++++++")

// chamar no console dentro da função
const obj5 = () => {
  console.log({ nome: "Marcos", sobrenome: "Silva" })
}
obj5()


