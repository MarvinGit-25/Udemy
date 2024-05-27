const express = require("express")
const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res)=>{
    return res.json({
        nome: "janaina da silva luz",
        idade: "27 anos"
    })
})
app.listen(3000, ()=>{
    console.log("aplicação rodando")
})