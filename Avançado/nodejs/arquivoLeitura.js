/* Uso comum para o módulo File System:

Ler arquivos
Criar arquivos
Atualizar arquivos
Deletar arquivos
Renomear arquivos*/

const fs = require('fs') // importando api do node file system.

const caminho = __dirname + '/arquivo.json'

// sincrono
// Não é recomendado porque trava o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8') // readFileSync ler o arquivo de forma sincrona
console.log(conteudo)

console.log("++++++++++++++++++")

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}: ${config.db.port}`)
})

//console.log("++++++++++++++++++")

const config = require('./arquivo.json') // require já tras o arquivo convertido em objeto
console.log(config.db)

console.log("++++++++++++++++++")

fs.readdir(__dirname, (err, arquivos) => { // reddir ler cont da pasta
  console.log('conteudo da pasta...')
  console.log(arquivos)
})