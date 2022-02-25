const quaseArray = { 0: 'Rafael', 1: 'ana', 2: 'bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
  value: function () { return Object.values(this) },
  enumerable: false
})

const meuArray = ['Rafael', 'ana', 'bia']
console.log(quaseArray.toString(), meuArray)