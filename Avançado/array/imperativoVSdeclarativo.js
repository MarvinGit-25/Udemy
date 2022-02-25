const alunos = [
  { nome: "João", nota: 7.9 },
  { nome: 'Maria', nota: 9.2 }
]

// imperativo
// menos reuso
// foco é, como tem que ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo
// foco é, o que tem que ser feito
// metodos que podem ser reusados
// não interessa os detalhes internos
const getnota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getnota).reduce(soma)
console.log(total2 / alunos.length)