// tagged template - processa o template dentro de uma função

function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
  })
  return resultado.join('')
}

const preço = 29.9
const preçoParcela = 11

console.log(real` 1 X de ${preço} ou 3 vezes de ${preçoParcela}`)