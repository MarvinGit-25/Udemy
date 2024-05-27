const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
  console.log(req.body)
  res.send('<h1>Parabéns Usuario incluido</h1>')
})

app.post('/usuarios/:id', (req, res) => {
  res.send('<h1>Parabéns Usuario alterado</h1>')
  console.log(req.params.id)
  console.log(req.body)

})

app.listen(3003)