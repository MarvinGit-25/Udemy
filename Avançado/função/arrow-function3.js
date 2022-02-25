let comparacomthis = function (params) {
  console.log(this === params)
}
comparacomthis(global) // nesse exemplo this é global!!
console.log("--------------------------------------------")

const obj = {}
comparacomthis = comparacomthis.bind(obj) // this aponta para o obj!!
comparacomthis(global)
comparacomthis(obj)
console.log("--------------------------------------------")

let comparacomthisarrow = params => console.log(this === params) // this não varia com arrow function!! 
comparacomthisarrow(global)
comparacomthisarrow(module.exports)
console.log("--------------------------------------------")

comparacomthisarrow = comparacomthisarrow.bind(obj) // nesse exemplo this não pode ser alterado
comparacomthisarrow(obj)
comparacomthisarrow(module.exports) 