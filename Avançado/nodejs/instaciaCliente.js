const contadorA = require('./instanciaUnica') // exportou objetos do node, faz cache
const contadorB = require('./instanciaUnica')
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

const contadorC = require('./instaciaNova')() // novas instacias criadas apartir de uma factory
const contadorD = require('./instaciaNova')()
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)
//console.log(contadorD)