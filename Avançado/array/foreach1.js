const aprovados = ['aldo', 'aghata', 'daniel', 'raquel']
aprovados.forEach(function (nome, indice, array) { // forEach percorre o array, retornando nome e indice e o proprio array
  console.log(`${indice + 1}: ${nome} ${array}`)
})

aprovados.forEach((nome) => console.log(nome)) // forEach arrow_function

console.log('====================================')

const exibiraprovados = aprovado => console.log(aprovado) // armazenando callback em uma constante
// e chamando dentro do forEach
aprovados.forEach(exibiraprovados)
