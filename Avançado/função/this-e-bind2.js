// metodo 1.
function pessoa1() {
  this.anos = 0
  setInterval(function () {
    this.anos++
    console.log("anos =", this.anos)
  }.bind(this), 1000) // bind(this) => metodo para this não variar.
}
new pessoa1

console.log("--------------------")
// metodo 2.
// Neste exemplo não importa onde ou quem chame a função, ela nunca vai variar.
// Pq this esta armazenado em uma variável constante

function pessoa() {
  this.idade = 0

  const self = this // metodo para this não variar.
  setInterval(function () {
    self.idade++
    console.log("idade =", self.idade)
  }, 1000)
}
new pessoa


// Com arrow function não é necessario usar this muito menos bind.
console.log("-------------------")
function pessoa2() {
  this.carro = 0
  setInterval(() => { // <= arrow function 
    this.carro++
    console.log("carro =", this.carro)
  }, 1000)
}
new pessoa2
