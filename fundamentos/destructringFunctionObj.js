function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { min: 100, max: 500 }
console.log(rand({ obj }))
console.log(rand({ min: 400 }))
console.log({})
//console.log(rand())
