console.log(typeof Array, typeof new Array, typeof []) // testando o tipo.
let aprovados = new Array('bia', 'carlos', 'ana') // criando um array
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0]) // acessa o indice
console.log(aprovados[1]) // acessa o indice
console.log(aprovados[2]) // acessa o indice
console.log(aprovados[3]) // acessa o indice


aprovados[3] = 'Paulo' // atribui ao indice
aprovados.push('abia') // adiciona na ultima posição do array
console.log(aprovados.length)
aprovados[10] = 'Rafael' // atribui ao indice
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // testando se é undefined

console.log(aprovados)

console.log(aprovados)
aprovados.sort // sort ordena o array
console.log(aprovados)

delete aprovados[1] // deleta do indice
// delete não altera a onden do array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1, 'elemento1', 'elemento2') // adiciona e remove do array
console.log(aprovados)