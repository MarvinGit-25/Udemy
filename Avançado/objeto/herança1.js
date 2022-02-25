const ferrari = {
  modelo: "f40",
  velMax: 340
}

const volvo = {
  modelo: "v40",
  velMax: 200
}
console.log(ferrari.__proto__) // __proto__ conseque-se acessar o prototipo do objeto = objeto pai.
console.log(ferrari.__proto__ === Object.prototype) // Object.prototype == objeto superior na hierarquia.
console.log(Object.prototype.__proto__) // Object.prototype == objeto superior na hierarquia.

function meuobj() { }
console.log(typeof Object, typeof meuobj)
console.log(Object.prototype)
console.log(meuobj.prototype)