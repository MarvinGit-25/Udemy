// tipos de funções

// funçoes de callback
/*Uma função callback é uma função passada a outra função como argumento,
 que é então invocado dentro dafunção externa para completar algum tipo de rotina ou ação.
*/

const notasDaTurma = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// sem callback !!
const notasAluno = []
for (let i in notasDaTurma) {
  if (notasDaTurma[i] < 7) {
    notasAluno.push(notasDaTurma[i])
  }
}
console.log(notasAluno)
console.log(notasDaTurma)

console.log("+++++++++++")

// Com Callback
// function declaration
const notasDaTurma1 = notasDaTurma.filter(function (notasDaTurma) {
  return notasDaTurma < 7
})
console.log(notasDaTurma1)

console.log("+++++++++++")

// Com callback
// arrow function return implicito
const notasDaTurma2 = notasDaTurma.filter(notasDaTurma => notasDaTurma < 7)
console.log(notasDaTurma2)

console.log("+++++++++++")

//Com Callback
// Armazenando arrow function em uma constante
const resultado = notasDaTurma => notasDaTurma < 7
const notasDaTurma3 = notasDaTurma.filter(resultado)
console.log(notasDaTurma3)

console.log("++++++++++++++++++++++++++")
// funções call e apply
console.log("++++++++++++++++++++++++++")

function concat() {
  return ("ola " + this.nome)
}

const aluno = {
  nome: "marcos",
}
console.log()
console.log(concat.call(aluno))
console.log(concat.apply(aluno))

