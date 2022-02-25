function getinteiroaleatorioentre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opçao = 0

while (opçao != -1) {
  opçao = getinteiroaleatorioentre(-1, 10)
  console.log(`opção ecolhida foi ${opçao}`)
}
console.log("ate a proxima!!")
