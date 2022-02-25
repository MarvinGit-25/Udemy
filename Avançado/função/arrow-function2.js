function pessoa() {
  this.idade = 0 // this para deixa a variavél global.
  setInterval(() => { // setInterval é um temporizador.
    this.idade++
    console.log(this.idade)
  }, 1000)
}
new pessoa()
