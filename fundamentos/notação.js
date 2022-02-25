console.log(Math.ceil(6.1)) // arredonda o valor para o topo!!

const obj1 = {}
obj1.nome = "Marcos"
obj1['nome'] = "Marcos Vinicius" //substitui o valor da variavel nome. 
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome // this => faz ficar visível fora do escopo.
  this.exec = function () {
    console.log("exec....")
  }
}

const obj2 = new Obj("cadeira")
const obj3 = new Obj("messa")
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()