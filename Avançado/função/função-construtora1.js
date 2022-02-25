function carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0

  //metódo pulblíco
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) { // this torna visivél pra fora da função!!
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }
  // metódo pulblíco
  this.getvelocidadeAtual = function () { // this torna visivél pra fora da função!!
    return velocidadeAtual
  }
}
const uno = new carro() // instanciando 
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(250, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())
