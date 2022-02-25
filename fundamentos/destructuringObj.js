// novo recurso ES6.
const pessoa = {
  nome: "ana",
  idade: 5,
  endereço: {
    logradouro: "rua ABC ",
    número: 1000
  }
}

const { nome, idade } = pessoa // extrai de dentro do objeto, representa o operador destruction.
console.log(nome, idade)
const { nome: n, idade: i } = pessoa // muda o nome das variavéis (nome, idade).
console.log(n, i)

const { endereço: { logradouro, número } } = pessoa // extrai logradouro, número do obj endereço.
console.log(logradouro, número)
