function soboanoticia(nota) {
  if (nota >= 7) {
    console.log("aprovado " + nota)
  }
}
soboanoticia(8.1)
soboanoticia(6.1)


function seforverdadeeufalo(valor) {
  if (valor) { // convert pra true.
    console.log("é verdade " + valor)
  }
}
// Não imprimi valores falsos!!

seforverdadeeufalo() // falso
seforverdadeeufalo(null) // falso
seforverdadeeufalo(undefined) // falso
seforverdadeeufalo(NaN) // falso
seforverdadeeufalo('') // falso
seforverdadeeufalo(0) // falso
seforverdadeeufalo(-1)
seforverdadeeufalo(' ')
seforverdadeeufalo('?')
seforverdadeeufalo([])
seforverdadeeufalo([1, 2])
seforverdadeeufalo({})
