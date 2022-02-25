function gerarNumeroEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise(resolve => {
    const fator = max - min + min
    const aleatorio = parseInt(Math.random() * fator + min)
    resolve(aleatorio)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroEntre(1, 60, 400),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 500),
    gerarNumeroEntre(1, 60, 3000),
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 1500),
  ])
}
gerarVariosNumeros().then(numeros => console.log(numeros))