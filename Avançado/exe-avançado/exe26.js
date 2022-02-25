/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais.
Exemplos:
Resoluções - Exercícios - Curso Fundamentos de Programação
12removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"*/

// Minha resposta
// resposta errada
function stringConsoante(frase) {
  if (frase == "a" || frase == "e" || frase == "i" || frase == "o" || frase == "u") {
    return "vogal"
  } else {
    return "consoate"
  }

}
console.log(stringConsoante("a"))

// resoluçao 1
function removerVogais(frase) {
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  vogais.forEach(vogal => frase = frase.replace(vogal, ''))
  return frase
}
console.log(removerVogais("Marcos"))

//Resolução 2
function removerVogais(frase) {
  return frase.replace(/[aeiou]/ig, '')
}
console.log(removerVogais("VINICIUS"))