const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // essa forma não é valida
console.log(tecnologias.get('react').framework) // forma valida

const chavesVariadas = new Map([
  [function () { }, "função"],
  [{}, "objeto"],
  [123, 'numero']
])
chavesVariadas.forEach((vl, ch) => {
  console.log(vl, ch)
})
console.log(chavesVariadas.has(123)) // .has indica se o elemento esta dentro do Map.
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // size indica quantos elementos estão contido no Map.

console.log("+++++++++++")

// do lado da chave não aceita repetição
// do lado do valor aceita repetição!!
chavesVariadas.set(123, "a")
chavesVariadas.set(123, "b")
chavesVariadas.set(456, "b")
console.log(chavesVariadas)

