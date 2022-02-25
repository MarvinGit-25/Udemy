// função em js é first-class object (citizens)
// higher-order function

// criar de forma literal 
function fun1() { }

// armazenar em uma variavél
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

console.log("---------------------1-----------------------")

// armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return "opa" }
console.log(obj.falar())

console.log("-----------------------2---------------------")

// passar função como parametro
function run(fun) {
  fun()
}
run(function () { console.log("execultando...") })

console.log("------------------------3--------------------")

// uma função pode retornar ou conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
soma(2, 3)(4)
console.log("")
const cincomais = soma(2, 3)
cincomais(4)

