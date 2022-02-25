// tagged template - processa o template dentro de uma função

function tag(partes, ...valore) {
  console.log(partes)
  console.log(valore)
  return 'outra string'
}

const aluno = "Gui"
const situaçao = "aprovado"

console.log(tag`${aluno} esta ${situaçao}`)