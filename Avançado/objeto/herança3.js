const pai = { nome: "pedro", corcabelo: "preto" }


const filha1 = Object.create(pai) // Object.create(pai) define o prototipo. 
filha1.nome = "Ana"
console.log(filha1.corcabelo)

const filha2 = Object.create(pai, {
  nome: { value: 'bia', writable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corcabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key) ? // hasOwnProperty diz se o atributo pertece ao objeto
    console.log(key) : console.log(`Por herança: ${key}`)
}
// teste 
const obj = Object.create(pai, {
  idade : {value: 25, writable: false, enumerable: true},
  altura:{value: 165}
})
console.log(obj.corcabelo)



