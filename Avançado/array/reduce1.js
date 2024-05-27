const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))

const resultados = alunos.map(a => a.nota).reduce(function (acumulador, Atual) { // reduce funciona com um acumulador
  console.log(acumulador, Atual)
  return acumulador + Atual
}, 0) // valor inicial
console.log(resultados)