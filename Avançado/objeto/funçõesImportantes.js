const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) // função do objeto que retira os atributos de dentro do objeto.
console.log(Object.values(pessoa)) // função do objeto que retira os valores de dentro do objeto.
console.log(Object.entries(pessoa)) // função do objeto que Retorna um array com subarrays chave/valor.

Object.entries(pessoa).forEach(e => { // aparti do foreach vou percorrer o array 
  console.log("=>",e[0], e[1])         //que foi criado pela função object.entries(pessoa).

});

// usando o operador destruring.
Object.entries(pessoa).forEach(([chave, valor]) => {// aparti do foreach vou percorrer o array 
  console.log(chave, valor)            // que foi criado pela função object.entries(pessoa), e retornar destruction

});
Object.defineProperty(pessoa, 'datadenascimento', {  // função do objeto que define caracteristicas
  enumerable: true,  // se pode ser listada             //para propriedades de um objeto.
  writable: false, // se pode ser modificada
  value: "01/03/2019" // atribuindo valor a variavel 'data_de_nascimento'.
})

pessoa.datadenascimento = 123 // tendando mudar o valor de datadenacimento.
console.log(pessoa.datadenascimento)
console.log(Object.keys(pessoa)) // função do objeto que retira os atributos de dentro do objeto.

// Object.assgn (ECMA script 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Object.assing é uma função do objeto que
// ...                                  // pega todos os objetos apartir do primeiro e concatena dentro do primeiro,  

Object.freeze(obj) // Object.freeze função do Objeto que congela o Objeto.
obj.c = 1243
console.log(obj)

const casa = {
  numero: 123,
  bairro: "centro"
}




