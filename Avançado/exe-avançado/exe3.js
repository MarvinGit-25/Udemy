/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
*/

// minha resposta 
const empressa = (qtdhoras, recbeHora) => {
  const salarioBr = qtdhoras * recbeHora
  const salarioL = salarioBr - salarioBr * 30 / 100
  return `Salario = a R$${salarioL} por mes`
}
console.log(empressa(32, 40))

// resolução
function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
  const salarioBruto = horasTrabalhadas * ganhoPorHora
  const salarioLiquido = salarioBruto - salarioBruto * 30 / 100
  return `Salário igual a R$ ${salarioLiquido}`
}
console.log(calcularSalarioLiquido(32, 45))

