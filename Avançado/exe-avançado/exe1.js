/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.

Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"*/

// minha resposta!!
function retornarString() {
  return ('Ola ' + 'leonardo' + "!")
}
console.log(retornarString())

// resoluçao 1
function cumprimentar(nome) {
  const saudacao = "Olá"
  return [saudacao, nome].join(', ').concat("!") /* join() junta todos os elementos de um array. 
                                                 concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro*/
}
console.log(cumprimentar("Marcos"))

// resoluçao 2
function cumprimentar(nome) {
  return "Olá, " + nome + "!"
}
console.log(cumprimentar("bruno"))

// resoluçao 3
function cumprimentar(nome) {
  return `Olá, ${nome}!`
}
console.log(cumprimentar("fei"))