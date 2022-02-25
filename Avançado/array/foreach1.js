const aprovados = ['aldo', 'aghata', 'daniel', 'raquel']
aprovados.forEach(function (nome, indice) { // forEach percorre o array = callback
  console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach((nome) => console.log(nome)) // forEach arrow_function

console.log('====================================')

const exibiraprovados = aprovado => console.log(aprovado) // armazenando callback em uma constante
// e chamando dentro do forEach
aprovados.forEach(exibiraprovados)
