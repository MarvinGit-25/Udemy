/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A -- 10%
B -- 15%
C -- 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function SalarioReajuste(plano, novoSalario) {
  switch (plano) {
    case "A":
      return novoSalario * 1.1
    case "B":
      return novoSalario * 1.15
    case "C":
      return novoSalario * 1.2
    default:
      return "Salario invalido"
  }
}
console.log(SalarioReajuste("A", 1000))
console.log(SalarioReajuste("B", 1000))
console.log(SalarioReajuste("C", 1000))
console.log(SalarioReajuste("D", 1000))