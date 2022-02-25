// for Of retorna os valores não os indices.
for (let letra of "cod3r") { // percorrendo uma string
  console.log(letra)
}

console.log("+++++")

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) { // percorrendo um array, retorna indice.
  console.log(i)
}

console.log("+++++")

for (let assunto of assuntosEcma) { // percorrendo o mesmo array, retornando os valores
  console.log(assunto)
}

console.log("+++++")

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])
for (let assunto of assuntosMap) { // percorrendo um array Map, retorna chave/valor.
  console.log(assunto)
}

console.log("+++++")

for (let chave of assuntosMap.keys()) { // percorrendo um array Map, retorna só chave.
  console.log(chave)
}

console.log("+++++")

for (let valor of assuntosMap.values()) { // percorrendo um array Map, retorna só valor.
  console.log(valor)
}

console.log("+++++")

for ([ch, vl] of assuntosMap.entries()) { // desestruturando de um array, retornando chave/valor
  console.log(ch, vl)
}

console.log("+++++")

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}
