const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo) {
  process.stdout.write("fala anonimo!\n") //stdout == saída padrão
  process.exit() // mata o processo
}
else {
  process.stdout.write('informe seu nome:') //stdout == saída padrão
  process.stdin.on('data', data => { //stdin == entrada padrão
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`fala ${nome}!!\n`) //stdout == saída padrão
    process.exit() // mata o processo
  })
}

