// cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 0 // Não faça isso em casa.
const avo = { attr1: "a" } // __proto__ avo tem como prototipo  o Object.prototype {}.
const pai = { __proto__: avo, attr2: "b", attr3: "3" } // __proto__ pai tem como prototipo  o avo.
const filho = { __proto__: pai, attr3: "c" } // __proto__ filho tem como prototipo  o pai.

console.log(filho.attr0, filho.attr1)
console.log(filho.attr2, filho.attr3)
console.log(pai.attr3)

const carro = {
  velatual: 0,
  velmax: 200,
  acelerarmais(delta) {
    if (this.velatual + delta <= this.velmax) {
      this.velatual += delta
    } else {
      this.velatual += this.velmax
    }
  },
  status() {
    return `${this.velatual}Km/hr de ${this.velmax}Km/hr`
  }
}

const ferrari = {
  modelo: "f40",
  velmax: 324 // shadowing
}

const volvo = {
  modelo: "v40",
  status() {
    return `${this.modelo}: ${super.status()}` // super referencia o prototipo. 
  }
}

Object.setPrototypeOf(ferrari, carro) // estabelece uma relação de prototipo.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarmais(100)
console.log(volvo.status())

ferrari.acelerarmais(200)
console.log(ferrari.status())
