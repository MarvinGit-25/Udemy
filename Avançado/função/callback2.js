const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// sem callback !!
const notasbaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasbaixas1.push(notas[i]) // push retorna elementos de array.
  }
}
console.log(notasbaixas1)
console.log("----------------------------")

// com callback !!
const notasbaixas2 = notas.filter(function (nota) { // filter filtra elementos do arrray.
  return nota < 7
})
console.log(notasbaixas2)
console.log("-----------------------------")

const notasbaixas3 = notas.filter(nota => nota < 7) // filter filtra elementos do arrray.
console.log(notasbaixas3)
console.log("------------------------------")

const notasmenorque7 = nota => nota < 7 // armazenamos a função ne uma constante!!
const notasbaixas4 = notas.filter(notasmenorque7)
console.log(notasbaixas4)

