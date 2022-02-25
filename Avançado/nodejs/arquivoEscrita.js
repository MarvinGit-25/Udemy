const fs = require('fs')

const produto = {
  nome: "celular",
  preço: 1299.99,
  desconto: 0.15
}

// fs.wtiteFile cria um arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // JSON.stringify converte pra JSON
  console.log(err || "arquivo salvo")
})