
const falar = () => {
  console.log("oi meu nome é", this.nome)
}
const obj = { nome: "Marcos"}

falar.call(obj)


console.log("+++++++++++++++++++++")

this.name = "Marcos Vinicius" // variavel global

function saymyname() {
  console.log(this.name)
}
//saymyname() Não chama o global

saymyname.call(this) // usamos call e apply para mudar a referencia de this
saymyname.apply(this)


