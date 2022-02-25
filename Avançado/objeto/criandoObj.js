// usando notação literal de objetos.
const obj = {}
console.log(obj)

// objetos em Js
// função construtora do javascript
console.log(typeof Object, typeof new Object)

const obj1 = new Object // função construtora do javascript.
console.log(obj1)

// funções construtoras
function produto(nome, preco, desconto) {
  this.nome = nome
  this.getprecocomdesconto = () => {
    return preco * (1 - desconto)
  }

}
const prod1 = new produto("caneta", 7.99, 0.15)
const prod2 = new produto("notebook", 2998, 0.25)
console.log(prod1.getprecocomdesconto(), prod2.getprecocomdesconto())
console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
// função factory
// função que retorna  objeto.
function criarfuncionario(nome, salariobase, faltas) {
  return {
    nome,
    salariobase,
    faltas,
    getsalario() {
      return (salariobase / 30 * (30 - faltas))
    }
  }
}

const f1 = criarfuncionario("Joao", 7980, 4)
const f2 = criarfuncionario("Maria", 11400, 1)
console.log(f1.getsalario(), f2.getsalario())

//Object.create
const filha = Object.create(null)
filha.nome = "Ana",
  filha.puta = 250
console.log(filha.nome)

// Uma função que retorna objeto
const Frowjason = JSON.parse('{"info": "sou um jason"}')
console.log(Frowjason.info)
