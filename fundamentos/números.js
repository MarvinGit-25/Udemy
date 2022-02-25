const peso1 = 1.0
const peso2 = Number("2.0")
console.log(peso1, peso2)
console.log("-------------------------------------")
console.log(Number.isInteger(peso1)) // is.Integer pra saber se o valor é inteiro ou não.
console.log(Number.isInteger(peso2))
console.log("-------------------------------------")

const avaliação1 = 9.871
const avaliação2 = 6.871
const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // toFixed controla a quantidade de casas decimais.
console.log("-------------------------------------")
console.log(media.toString())  // toString converte valores númericos em strings.
console.log("-------------------------------------")
console.log(typeof media) // indica o tipo de um operador. 
console.log("-------------------------------------")
console.log(typeof Number)