const pilotos = ['vetel', 'alonso', ' raikkonen', 'massa']

console.log('usando pop()')
pilotos.pop() // remove da ultima posição do array 
console.log(pilotos)

console.log('usando shift()')

pilotos.shift() // remove da primeira posição
console.log(pilotos)

console.log('usando push()')

pilotos.push('vestasppem') // adiciona na ultima posição do array
console.log(pilotos)

console.log('usando unshift()')

pilotos.unshift('Hamilton') // adiciona na primeira posição do array
console.log(pilotos)

//splice pode adicinar e remover elementos.

// adicionar
console.log('usando splice()')

pilotos.splice(2, 0, 'botas', 'massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

console.log('usando slice()')
const algunsPilotos1 = pilotos.slice(2) // gera um novo array aprtir do indice.
console.log(algunsPilotos1)

// outro metodo de slice
const algunPilotos2 = pilotos.slice(0, 4) //  gera um novo array aprtir do indice sem incluir o ultimo indice.
console.log(algunPilotos2)
