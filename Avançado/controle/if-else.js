const imprimirresultado = function (nota) {
  if (nota > 7) {
    console.log("aprovado")
  } else {
    console.log("reprovado")
  }
}
imprimirresultado(8)
imprimirresultado(6.5)
imprimirresultado('epa') // cuidado
