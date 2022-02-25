function funcionarOUNão(valor, chancedeerro) {
  return new Promise((resolve, reject) => {
    try {
      con.log("temp")
      if (Math.random() < chancedeerro) {
        reject('ocorreu um erro!')
      }
      else {
        resolve(valor)
      }
    }
    catch (e) {
      reject(e)
    }

  })
}

funcionarOUNão('testando...', 0.9)
  .then(v => console.log(`valor: ${v}`))
  .then(
    v => consol.log(v),
    err => console.log(`erro espe:${err}`)
  )
  .then(() => console.log("quase fim"))
  .catch(err => console.log(`erro Geral ${err}`))
  .then(() => console.log('fim'))