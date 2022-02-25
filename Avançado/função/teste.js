
function VariasFunc() {
  const soma = e => e + 2
  return {
    falar1(e = soma) {
      console.log(e(12))

    },
    falar2(b) {
      return b - 2
    },
    falar3(c) {
      return c * 2
    },
    falar4(d) {
      return d / 2

    },
  }
}
//console.log(VariasFunc())
const func1 = VariasFunc()
func1.falar1()
const func2 = VariasFunc()
console.log(func2.falar2(4))
const func3 = VariasFunc()
console.log(func3.falar3(5))
const func4 = VariasFunc()
console.log(func4.falar4(12))