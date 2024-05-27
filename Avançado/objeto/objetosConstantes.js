// pessoa => 123 => {...}
const pessoa = { nome: "Joao" }
pessoa.nome = "pedro"
console.log(pessoa)

// pessoa => 456 => {...}
// pessoa = {nome: 'Ana}

Object.freeze(pessoa) // freeze congela o objeto.
pessoa.nome = "MAria"
console.log(pessoa)

