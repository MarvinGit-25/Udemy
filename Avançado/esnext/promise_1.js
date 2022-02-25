// uma promessa gera apenas um unico valor

const primeiroElemento = arrayOUstring => arrayOUstring[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)

