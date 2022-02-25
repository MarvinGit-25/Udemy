// novo recurso ES6.
const [a] = [10]
console.log(a)
console.log("-------------------------------")
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // extrai de dentro do array e add os valores, representa o operador destruction.
console.log(n1, n3, n5, n6)
console.log("-------------------------------")


const [, [, nota]] = [[, 8, 8], [9, 6, 8]]  // extrai de dentro de um array aninhado e add um valor.
console.log(nota)
console.log("-------------------------------")
const array = [12, 23, 34, 45, 56, 56]
const [pri, seg, ter, quar, quin, sex] = [12, 23, 34, 45, 56, 56]
console.log(pri, seg, ter, quar, quin, sex)


