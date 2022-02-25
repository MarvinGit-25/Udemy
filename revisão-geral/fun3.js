// funcões com array

// armazenando a função em um array
const array = [function soma(a, b) { return a - b }]
console.log(array[0](10, 2))

console.log("++++++")

// arguments array interno da função
function soma() {
  let soma = 0
  for (let i in arguments) {
    soma += arguments[i]
  }
  return soma
}
console.log(soma())
console.log(soma(2, 5))
console.log(soma(50, 25))

console.log("++++++")


// percorrer array
function percorrerArray() {
  const array = [1, 2, 3, 4, 5]
  for (let i in array) {
    array[i]
  }
  return array
}
console.log(percorrerArray())

console.log("++++++")

// passar um array como parametro
function arrayParams(array) {
  return array
}
console.log(arrayParams([1, 2, 3, 4, "Marcos", true]))

// definir um array no parametro de uma função
function array2(array = [1, 2, 3, 4]) {
  return array ** 2
}
console.log(array2([4]))

// return Array
const array3 = () => {
  return ["Marcos", "Vinicius", "Bruno"]
}
console.log(array3())

// chamar no console dentro da função
const array4 = () => {
  console.log(["Marcos", "Vinicius", "Bruno"])
}
array4()
