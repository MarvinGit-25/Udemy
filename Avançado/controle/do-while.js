function getinteiroaleatorioentre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opçao = 0

do {
  opçao = getinteiroaleatorioentre(-1, 10)
  console.log(`opção ecolhida foi ${opçao}`)
} while (opçao != -1) // estrutura onde a expresão vem depois bloco.
console.log("ate a proxima!!")