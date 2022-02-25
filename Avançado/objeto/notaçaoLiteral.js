const a = 1
const b = 2
const c = 3

const obj = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj, obj2)

const nomeAttr = "nota"
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

console.log("obj4")
const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

const obj5 = {
  função1: function () {
    // ...
  },
  função2() { }
}

