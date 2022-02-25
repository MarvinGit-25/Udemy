/* ​ Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function divisivelPorTres(n) {
  if (n % 3 == 0) {
    return true
  }
  else {
    return false
  }
}
console.log(divisivelPorTres(9))
console.log(divisivelPorTres(10))
console.log(divisivelPorTres(18))