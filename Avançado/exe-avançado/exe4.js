/*Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"*/

function mesDoAno(numero) {
  switch (numero) {
    case 1:
      return "janeiro"
      break
    case 2:
      return "fevereiro"
      break
    case 3:
      return "março"
      break
    case 4:
      return "abril"
      break
    case 5:
      return "maio"
      break
    case 6:
      return "junho"
      break
    case 7:
      return "julho"
      break
    case 8:
      return "agosto"
      break
    case 9:
      return "setembro"
      break
    case 10:
      return "outubro"
      break
    case 11:
      return "novembro"
      break
    case 12:
      return "dezembro"
    default:
  }
}
console.log(mesDoAno(5))

