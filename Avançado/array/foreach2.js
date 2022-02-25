Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i <= this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['aldo', 'aghata', 'daniel', 'raquel']
aprovados.forEach2(function (nome, indice) { // forEach percorre o array = callback
  console.log(`${indice + 1}: ${nome}`)
})