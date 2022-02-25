
const falar = () => {
  console.log("futuro")
}
const obj = { nome: "Marcos", }

falar.call(obj)

const falar2 = () => {
  console.log("programador")
}
const obj2 = { nome: "marcos", }

falar2.apply(obj2)




console.log("+++++++++++++++++++++")

this.name = "Marcos Vinicius" // variavel global

function saymyname() {
  console.log(this.name)
}
//saymyname() Não chama o global

saymyname.call(this) // usamos call e apply para mudar a referencia de this
saymyname.apply(this)


