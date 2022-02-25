Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

const impromirresultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("quadro de honra!!")
  }
  else if (nota.entre(7, 8.99)) {
    console.log("Aprovado!!")
  }
  else if (nota.entre(4, 6.99)) {
    console.log("recuperação!!")
  } else if (nota.entre(0, 3.99)) {
    console.log("reprovado")
  } else {
    console.log("Nota invalida!!")
  }
}

impromirresultado(10)
impromirresultado(8.9)
impromirresultado(6.55)
impromirresultado(2.3)
impromirresultado(-1)
impromirresultado(11)



