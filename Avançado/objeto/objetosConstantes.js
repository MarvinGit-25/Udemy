// pessoa => 123 => {...}
const pessoa = { nome: "Joao" }
pessoa.nome = "pedro"
console.log(pessoa)

// pessoa => 456 => {...}
// pessoa = {nome: 'Ana}

Object.freeze(pessoa) // freeze congela o objeto.
pessoa.nome = "MAria"
console.log(pessoa)

const pessoa2 = Object.freeze({ nome: "Marcos Vinicius Rocha da silva futuro desenvolvedor web " }) // cria objeto congelado
console.log(pessoa2)