const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() { return a + b + c }
}
console.log(JSON.stringify(obj)) // converte para JSON
console.log(JSON.parse('{"a":1, "b": 2, "c": 3}')) // converte para objeto
console.log('{"a":1.7, "b": "string", "c": true, "d":{}, "e": [] }')



