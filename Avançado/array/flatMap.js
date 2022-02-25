const escola = [{
  nome: 'turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: "Ana",
    nota: 9.3,
  }]
}, {
  nome: "turma M2",
  alunos: [{
    nome: 'rebeca',
    nota: 8.9,
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]

const GetNotasDoAluno = aluno => aluno.nota
const GetNotasDaTurma = turma => turma.alunos.map(GetNotasDoAluno)
const notas1 = escola.map(GetNotasDaTurma)
console.log(notas1)
console.log('===============================')

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
/* FlatMap -- primeiro mapeia cada elemento usando uma função de mapeamento e,
em seguida, nivela o resultado em um novo array.  */
Array.prototype.flatmap = function (callback) { // é um map + concat
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(GetNotasDaTurma)
console.log(notas2)