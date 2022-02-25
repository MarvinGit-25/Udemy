// não aceita repetição/ Não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // has teta se o elemento esta contido ou não
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Lucas', 'Raquel', 'Julia', 'Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)

