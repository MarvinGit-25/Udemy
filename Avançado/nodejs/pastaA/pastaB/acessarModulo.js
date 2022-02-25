const moduloA = require("../../moduloA")
console.log(moduloA)

const c = require("./pastaC.js")
console.log(c.ola2)

// usando modulo do node
const http = require('http')
http.createServer((req, res) => {
  res.end("bom dia")
  res.end()
}).listen(8080) 