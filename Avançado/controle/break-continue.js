const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nuns) {
  if (x == 5) {
    break // para o fluxo total. Age em cima do for.
  }
}
console.log(`${x} indice = ${nuns[x]}`)

console.log("------------------------------")

for (y in nuns) {
  if (y == 5) {
    continue // para o fluxo e continua dentro do laço.
  }
}
console.log(`${y} indice =  ${nuns[y]}`)

console.log("-------------------------------")

externo: for (a in nuns) {
  for (b in nuns) {
    if (a == 2 && b == 3) break externo // externo é um rotúlo pra chamar break de fora!!
    console.log(`par = ${a}, ${b} `)

  }
}