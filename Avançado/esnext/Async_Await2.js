function gerarNumeroEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max] // destructuring
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + min
    const aleatorio = parseInt(Math.random() * fator + min)
    if (numerosProibidos.includes(aleatorio)) { //determinar se um array contém um determinado 
      reject('Número repetido!')               // elemento, retornando  true ou  false
    }
    else {
      resolve(aleatorio)
    }
  })
}

async function gerarMegaSena(QtdNumeros) {
  try {


    const numeros = []
    for (let _ of Array(QtdNumeros).fill()) {
      numeros.push(await gerarNumeroEntre(1, 60, numeros))

    }
    return numeros
  } catch (e) {
    throw 'Que chato'
  }
}

gerarMegaSena(8)
  .then(console.log)
  .catch(console.log)

