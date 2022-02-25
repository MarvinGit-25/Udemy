function gerarNumeroEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max] // destructuring
  }
  return new Promise(resolve => {
    const fator = max - min + min
    const aleatorio = parseInt(Math.random() * fator + min)
    resolve(aleatorio)
  })
}

gerarNumeroEntre(1, 60)
  .then(num => num * 10)
  .then(numx10 => `O numero gerado foi ${numx10}`)
  .then(console.log)